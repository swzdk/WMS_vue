import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/Layout'

import bdmanage from './modules/bdmanage/index'
import businessmanage from './modules/businessmanage/index'
import storemanage from './modules/storemanage/index'
import instoremanage from './modules/instoremanage/index'
import outstoremanage from './modules/outstoremanage/index'
Vue.use(VueRouter)

// 静态路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    hidden: true,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard'),
        meta: {
          title: '工作台'
        }
      }
    ]
  }
]

// 动态路由
export const asyncRoutes = [
  bdmanage,
  businessmanage,
  storemanage,
  instoremanage,
  outstoremanage
]
const router = new VueRouter({
  routes: [...asyncRoutes, ...constantRoutes]
})

export default router
