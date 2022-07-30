//  {  path: '', component: '' }
// 每个子模块 其实 都是外层是layout  组件位于layout的二级路由里面
export default {
  path: 'area', // 路径
  name: 'area', // 给路由规则加一个name
  component: () => import('@/views/store_area_manage'),
  meta: {
    title: '库区管理'
  }
}
