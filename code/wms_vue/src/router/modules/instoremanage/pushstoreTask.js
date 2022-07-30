// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'task-add', // 路径
  name: 'taskAdd', // 给路由规则加一个name
  component: () => import('@/views/pushstoreTask'),
  meta: {
    title: '上架任务'
  }
}
