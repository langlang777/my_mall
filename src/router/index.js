// 1.倒入路由包
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const home = () =>
    import('../views/home/home.vue')
const cart = () =>
    import('../views/cart/cart.vue')
const category = () =>
    import('../views/category/category.vue')
const profile = () =>
    import('../views/profile/profile.vue')

// 3.配置路由和组件之间到映射关系

const routes = [{
    path:'/',
    redirect: '/home'
},{
    path: '/home',
    // 如果没有默认 / 路径 会报警告
    component: home,
}, {
    path: '/cart',
    component: cart,
}, {
    path: '/category',
    component: category,
}, {
    path: '/profile',
    component: profile,
}]



// 2.创建路由对象
const router = createRouter({
    // history: createWebHashHistory(), 路径带# 号
    history: createWebHistory(), // 路径不带 # 号
    // 下面这个就是上面定义的 routes，配置路由和组件之间到映射关系
    routes,
})


// 4.倒出router 传入到vue实例中
export default router

// 5.使用路由 用 <!-- 通过router-link 添加路由映射链接 -->
// <!-- 点击映射链接后 显示在的位置 用 <router-view/> -->
// 在 app.vue里