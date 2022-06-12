<template>
    <MenuLogo v-if="!isCollapse" class="logo"></MenuLogo>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="#304156"
        @open="handleOpen"
        @close="handleClose"
        router
    >
        <MenuItem :menu-list="list"></MenuItem>
    </el-menu>
</template>

<script setup lang="ts">
import {ref, reactive, computed} from 'vue'
import {useRoute} from 'vue-router'
import {menuList} from './menuList.js'
import MenuItem from './MenuItem.vue'
import MenuLogo from './MenuLogo.vue'
import { store } from '@/store'

const list = reactive(menuList);
const route = useRoute();
const activeIndex = computed(() => {
  const {path} = route;
  return path;
})

const isCollapse = computed(() => store.getters.getCollapse)


const handleOpen = (key: string, keyPath: string[]) => {}
const handleClose = (key: string, keyPath: string[]) => {}
</script>

<style lang="scss" scoped>
@keyframes logoAnimation {
  0% { transform: scale(0); }
  50% { transform: scale(1); }
  100% { transform: scale(1); }
}

.logo {
  animation: logoAnimation 1s ease-out;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}
.el-menu{
  border-right: none;
}
:deep(.el-sub-menu .el-sub-menu__title){
  color: #f4f4f5 !important;
}
:deep(.el-menu .el-menu-item){
  color: #bfcbd9;
}
:deep(.el-menu-item.is-active){
  color: #409eff !important;
}
:deep(.is-opened .el-menu-item){
  background-color: #1f2d3d !important;
}
:deep(.el-menu-item:hover){
  background-color: #001528 !important;
}
</style>
