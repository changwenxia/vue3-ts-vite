<template>
    <el-tabs
        v-model="activeTab"
        type="card"
        closable
        @tab-click="clickTab"
        @tab-remove="removeTab"
    >
        <el-tab-pane
            v-for="item in tabsList"
            :key="item.path"
            :label="item.title"
            :name="item.path"
        />
    </el-tabs>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from "vue"
import { useStore } from '@/store'
import { ITable } from '@/store/types'
import { useRoute, useRouter } from "vue-router"
const route = useRoute()
const router = useRouter()
const store = useStore()

const activeTab = ref('')
const tabsList = computed(() => store.getters.getTabsList)
const clickTab = (tab: any) => {
    const {props} = tab;
    router.push(props.name)
}
const removeTab = (targetName: string) => {
    if (targetName === '/dashboard') return;
    const tabs = tabsList.value
    let activeName = activeTab.value
    if (activeName === targetName) {
        tabs.map((tab: ITable, index: number) => {
            // 删除的选项卡前后有选项卡时，重新设置当前激活的选项卡
            const nextTab = tabs[index - 1] || tabs[index + 1]
            if (nextTab) {
                activeName = nextTab.path
            }
        })
    }
    // 重新设置当前激活的选项卡
    activeTab.value = activeName;
    // 重新设置选项卡数据
    store.commit('setTabsList', tabs.filter(item => item.path !== targetName))
    // 点击选项卡时，左侧菜单同步选中并展开选项卡内容
    router.push({ path: activeName})
}
const setActiveTab = () => activeTab.value = route.path
const addTab = () => {
    const {path, meta} = route;
    const tab:ITable = {
        path: path,
        title: meta.title as string
    }
    store.commit('addTab', tab)
}

//解决刷新数据丢失的问题
const beforeRefresh = () => {
    // 刷新前将选项卡数据保存到sessionstorage中
    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('tabsView', JSON.stringify(tabsList.value))
    })
    // 重新设置选项卡数据
    let tabsSession = sessionStorage.getItem('tabsView');
    if (tabsSession) {
        const oldTabs = JSON.parse(tabsSession);
        if (oldTabs.length > 0) {
            store.commit('setTabsList', oldTabs)
        }
    }
}
watch(() => route.path, () => {
    setActiveTab(),
    addTab()
})
onMounted(() => {
    beforeRefresh(),
    setActiveTab(),
    addTab()
})
</script>

<style lang="scss" scoped></style>
