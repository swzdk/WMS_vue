// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'warehouse', // 路径
  name: 'warehouse', // 给路由规则加一个name
  component: () => import('@/views/store_manage'),
  meta: {
    title: '仓库管理'
  }
}
