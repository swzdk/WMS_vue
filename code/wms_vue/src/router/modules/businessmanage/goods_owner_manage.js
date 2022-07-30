// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'task-picking', // 路径
  name: 'taskPicking', // 给路由规则加一个name
  component: () => import('@/views/carrier_manage'),
  meta: {
    title: '承运商管理'
  }
}
