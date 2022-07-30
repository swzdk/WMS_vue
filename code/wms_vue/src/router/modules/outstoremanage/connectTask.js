// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'manage-task-transfer', // 路径
  name: 'manageTaskTransfer', // 给路由规则加一个name
  component: () => import('@/views/connectTask'),
  meta: {
    title: '交接任务'
  }
}
