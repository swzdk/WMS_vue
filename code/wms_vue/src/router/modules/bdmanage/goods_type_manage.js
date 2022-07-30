//  {  path: '', component: '' }
// 每个子模块 其实 都是外层是layout  组件位于layout的二级路由里面
export default {
  path: 'goods-type', // 路径
  name: 'goodsType', // 给路由规则加一个name
  component: () => import('@/views/goods_type_manage'),
  meta: {
    title: '货品类型管理'
  }
}
