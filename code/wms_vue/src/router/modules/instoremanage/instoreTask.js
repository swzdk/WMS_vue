// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'task-receive', // 路径
  name: 'taskReceive', // 给路由规则加一个name
  component: () => import('@/views/instoreTask'),
  meta: {
    title: '收货任务'
  }
}
