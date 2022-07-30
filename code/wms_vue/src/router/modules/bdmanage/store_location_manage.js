//  {  path: '', component: '' }
// 每个子模块 其实 都是外层是layout  组件位于layout的二级路由里面
export default {
  path: 'location', // 路径
  name: 'location', // 给路由规则加一个name
  component: () => import('@/views/store_location_manage'),
  meta: {
    title: '库位管理'
  }
}
