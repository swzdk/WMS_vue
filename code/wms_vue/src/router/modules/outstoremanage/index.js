import Layout from '@/Layout'
import listOut from './outstore'
import taskPicking from './outstoreTask'
import manageTaskTransfer from './connectTask'

export default {
  // 二级路由但没有独立页面，直接关联Layout
  path: '/manage-storage-out', // 路径
  name: 'outstoremanage', // 给路由规则加一个name
  component: Layout, // 组件,
  meta: {
    title: '出库管理',
    icon: 'chuku'
  },
  children: [
    // 出库单
    listOut,
    // 捡货任务
    taskPicking,
    // 交接任务
    manageTaskTransfer
  ]
}
