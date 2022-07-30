// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'goods', // 路径
  name: 'goods', // 给路由规则加一个name
  component: () => import('@/views/goods_manage'),
  meta: {
    title: '货品管理'
  }
}
