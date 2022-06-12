export const menuList = [
  {
    path: "/dashboard",
    component: "Layout",
    meta: {
      title: "首页",
      icon: "Watch",
      roles: ["sys:manage"]
    },
    children: []
  },
  {
    path: "/system",
    component: "Layout",
    alwaysShow: true,
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Menu",
      roles: ["sys:manage"],
      parentId: 0
    },
    children: [
      {
        path: "/department",
        component: "/system/department/department",
        alwaysShow: false,
        name: "department",
        meta: {
          title: "机构管理",
          icon: "ZoomOut",
          roles: ["sys:dept"],
          parentId: 17
        }
      },
      {
        path: "/userList",
        component: "/system/User/UserList",
        alwaysShow: false,
        name: "userList",
        meta: {
          title: "用户管理",
          icon: "ZoomOut",
          roles: ["sys:user"],
          parentId: 17
        }
      },
      {
        path: "/roleList",
        component: "/system/Role/RoleList",
        alwaysShow: false,
        name: "roleList",
        meta: {
          title: "角色管理",
          icon: "ZoomOut",
          roles: ["sys:role"],
          parentId: 17
        }
      },
      {
        path: "/menuList",
        component: "/system/Menu/MenuList",
        alwaysShow: false,
        name: "menuList",
        meta: {
          title: "权限管理",
          icon: "ZoomOut",
          roles: ["sys:menu"],
          parentId: 17
        }
      }
    ]
  },
  {
    path: "/goods",
    component: "Layout",
    alwaysShow: true,
    name: "goods",
    meta: {
      title: "商品管理",
      icon: "ZoomOut",
      roles: ["sys:goods"],
      parentId: 0
    },
    children: [
      {
        path: "/goodCategory",
        component: "/goods/goodsCategory/goodsCategoryList",
        alwaysShow: false,
        name: "goodCategory",
        meta: {
          title: "商品分类",
          icon: "ZoomOut",
          roles: ["sys:goodsCategory"],
          parentId: 34
        }
      }
    ]
  }
];
  