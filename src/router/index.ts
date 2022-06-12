import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../layout/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        children: [
            {
                path: "/dashboard",
                component: () => import("../views/index.vue"),
                name: "dashboard",
                meta: {
                    title: "首页",
                    icon: "#icondashboard",
                },
            },
        ],
    },
    {
        path: "/system",
        component: Layout,
        name: "system",
        meta: {
            title: "系统管理",
            icon: "Menu",
            roles: ["sys:manage"],
            parentId: 0,
        },
        children: [
            {
                path: "/department",
                component: () =>
                    import("../views/system/Department/Department.vue"),
                name: "department",
                meta: {
                    title: "机构管理",
                    icon: "Menu",
                    roles: ["sys:dept"],
                },
            },
            {
                path: "/userList",
                component: () => import("../views/system/User/UserList.vue"),
                name: "userList",
                meta: {
                    title: "用户管理",
                    icon: "Menu",
                    roles: ["sys:user"],
                },
            },
            {
                path: "/roleList",
                component: () => import("../views/system/Role/RoleList.vue"),
                name: "roleList",
                meta: {
                    title: "角色管理",
                    icon: "Menu",
                    roles: ["sys:role"],
                },
            },
            {
                path: "/menuList",
                component: () => import("../views/system/Menu/MenuList.vue"),
                name: "menuList",
                meta: {
                    title: "权限管理",
                    icon: "Menu",
                    roles: ["sys:menu"],
                },
            },
        ],
    },
    {
        path: "/goods",
        component: Layout,
        name: "goods",
        meta: {
            title: "商品管理",
            icon: "Menu",
            roles: ["sys:goods"],
        },
        children: [
            {
                path: "/goodCategory",
                component: () =>
                    import("../views/goods/goodsCategory/GoodsCategory.vue"),
                name: "goodCategory",
                meta: {
                    title: "商品分类",
                    icon: "Menu",
                    roles: ["sys:goodsCategory"],
                },
            },
        ],
    },
    {
        path: "/systemConfig",
        component: Layout,
        name: "systemConfig",
        meta: {
            title: "系统工具",
            icon: "Menu",
            roles: ["sys:systemConfig"],
        },
        children: [
            {
                path: "/document",
                component: () =>
                    import("../views/system/config/SystemDocument.vue"),
                name: "http://localhost:8089/swagger-ui/index.html",
                meta: {
                    title: "接口文档",
                    icon: "Menu",
                    roles: ["sys:document"],
                },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
