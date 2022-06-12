<template>
    <el-icon class="icons" @click="changeStatus">
        <component :is="status ? 'Expand' : 'Fold'"></component>
    </el-icon>
</template>

<script setup lang="ts">
import {Fold, Expand} from '@element-plus/icons-vue';
import {ref, computed} from 'vue'
import {useStore} from '@/store'
const store = useStore()
const status = computed(() => store.getters.getCollapse)
const changeStatus = () => {
  store.commit('setCollapse', !status.value)
}
</script>

<style lang="scss" scoped>
.icons {
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #303133;
  cursor: pointer;
  margin-right: 15px;
}
</style>
