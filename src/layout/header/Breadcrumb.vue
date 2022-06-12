<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tabs" :key="item.path">
            {{ item.meta.title }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, Ref, watch} from "vue";
import { useRoute, RouteLocationMatched } from "vue-router";

const route = useRoute();
// 面包屑导航数据
const tabs: Ref<RouteLocationMatched[]> = ref([]);
const getBreadCrumb = () => {
    let matched = route.matched.filter((item) => item.meta && item.meta.title);
    //判断第一个是否是首页,如果不是 构造一个首页
    if (matched[0].path !== "/dashboard") {
        matched = [
            { path: "/dashboard", meta: { title: "首页" } } as any,
        ].concat(matched);
    }
    tabs.value = matched;
};
getBreadCrumb();
watch(()=>route.path, () => getBreadCrumb())
</script>

<style lang="scss" scoped></style>
