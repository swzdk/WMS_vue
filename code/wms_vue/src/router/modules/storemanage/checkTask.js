// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'list-task', // 路径
  name: 'listTask', // 给路由规则加一个name
  component: () => import('@/views/checkTask'),
  meta: {
    title: '盘点任务'
  }
}
