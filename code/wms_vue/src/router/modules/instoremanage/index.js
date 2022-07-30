import Layout from '@/Layout'
import listIn from './instoreList'
import taskReceive from './instoreTask'
import taskAdd from './pushstoreTask'

export default {
  // 二级路由但没有独立页面，直接关联Layout
  path: '/manage-storage-in', // 路径
  name: 'instoremanage', // 给路由规则加一个name
  component: Layout, // 组件,
  meta: {
    title: '入库管理',
    icon: 'ruku'
  },
  children: [
    // 入库单
    listIn,
    // 收货任务
    taskReceive,
    // 上架任务
    taskAdd
  ]
}
