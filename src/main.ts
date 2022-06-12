import { createApp, createVNode } from 'vue';
import '@/assets/normalize.css'
import App from './App.vue';
import router from '@/router';
import {store, key} from '@/store';

import 'element-plus/dist/index.css';
//统一导入el-icon图片
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App);
app.use(router).use(store, key).mount('#app')
// 动态引入element plus图标
// 方式一
const person = {
    name: 'aa',
    age: 18
}
// typeof 获取一个对象的类型
type tp = typeof person;
// keyof 获取某种类型的所有键(key), 返回类似是一个联合类型；
type keys = keyof tp;
// 全局注册组件
Object.keys(Icons).forEach((key) => {
    app.component(key, Icons[key as keyof typeof Icons]);
})
// 方案二
// const Icon = (props: { icon: string}) => {
//     const {icon} = props;
//     return createVNode(Icons[icon as keyof typeof Icons]);
// }
// app.component('Icon', Icon)
