import Layout from '@/Layout'
import goodsOwner from './goods_owner_manage'
import taskPicking from './carrier_manage'

export default {
  // 二级路由但没有独立页面，直接关联Layout
  path: '/manage-business', // 路径
  name: 'businessmanage', // 给路由规则加一个name
  component: Layout, // 组件,
  meta: {
    title: '商务管理',
    icon: 'shangwu'
  },
  children: [
    // 货主管理
    goodsOwner,
    // 承运商管理
    taskPicking
  ]
}
