<template>
    <template v-for="menu in menuList" :key="menu.path">
        <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
            <template #title>
                <i
                    v-if="menu.meta.icon && menu.meta.icon.includes('el-icon')"
                    :class="menu.meta.icon"
                    class="icons"
                ></i>
                <!-- 方式一 -->
                <component v-else :is="menu.meta.icon" class="icons"></component>
                <!-- 方式二 -->
                <!-- <Icon v-else :icon="menu.meta.icon" class="icons"></Icon> -->
                <span>{{menu.meta.title}}</span>
            </template>
            <menu-item :menu-list="menu.children"></menu-item>
        </el-sub-menu>
        <el-menu-item v-else style="color:#f4f4f5" :index="menu.path">
             <i
                v-if="menu.meta.icon && menu.meta.icon.includes('el-icon')"
                :class="menu.meta.icon"
                class="icons"
            ></i>
            <component v-else :is="menu.meta.icon" class="icons"></component>
            <!-- <Icon v-else :icon="menu.meta.icon" class="icons"></Icon> -->

            <span>{{menu.meta.title}}</span>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
defineProps(["menuList"]);
</script>

<style lang="scss" scoped>
.icons{
  width: 24px;
  height: 18px;
}</style>
