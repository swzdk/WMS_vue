// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'warehouse/create/:code', // 路径
  name: 'warehouseCreate', // 给路由规则加一个name
  component: () => import('@/views/store_create_edit'),
  meta: {
    title: '新增仓库',
    keepAlive: true
  }
}
