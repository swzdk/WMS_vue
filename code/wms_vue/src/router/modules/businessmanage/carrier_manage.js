// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'goods-owner', // 路径
  name: 'goodsOwner', // 给路由规则加一个name
  component: () => import('@/views/goods_owner_manage'),
  meta: {
    title: '货主管理'
  }
}
