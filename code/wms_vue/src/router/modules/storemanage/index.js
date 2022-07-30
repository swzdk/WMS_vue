import Layout from '@/Layout'
import list from './checkList'
import listTask from './checkTask'
import storageLoseProfit from './inventory-gainorloss'
import latestStorage from './inventory-intime'

export default {
  // 二级路由但没有独立页面，直接关联Layout
  path: '/manage-storage', // 路径
  name: 'storemanage', // 给路由规则加一个name
  component: Layout, // 组件,
  meta: {
    title: '库内管理',
    icon: 'kucun'
  },
  children: [
    // 盘点单
    list,
    // 盘点任务
    listTask,
    // 库存损益
    storageLoseProfit,
    // 实时库存
    latestStorage
  ]
}
