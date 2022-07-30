// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'warehouse/details/:id', // 路径
  name: 'warehouseEdit', // 给路由规则加一个name
  component: () => import('@/views/store_create_edit'),
  meta: {
    title: '编辑仓库',
    keepAlive: true
  }
}
