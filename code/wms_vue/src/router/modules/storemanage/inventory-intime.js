// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'latest-storage', // 路径
  name: 'latestStorage', // 给路由规则加一个name
  component: () => import('@/views/inventory-intime'),
  meta: {
    title: '实时库存'
  }
}
