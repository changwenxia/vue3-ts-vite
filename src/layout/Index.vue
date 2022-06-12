<template>
    <el-container class="layout">
        <el-aside width="auto" class="aside">
            <Menu />
        </el-aside>
        <el-container>
            <el-header class="header">
                <Header />
            </el-header>
            <el-main class="main">
                <Tabs />
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Menu from "./menu/Menu.vue";
import Header from "./header/Header.vue";
import Tabs from './tabs/Tabs.vue'
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;
    .aside {
        background-color: rgb(48, 65, 86);
    }
    .header {
        height: 50px;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        align-items: center;
    }
    .main {
        padding-top: 0;
        // background-color: darkgray;
    }
}
</style>
