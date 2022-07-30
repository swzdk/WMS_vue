// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'list', // 路径
  name: 'list', // 给路由规则加一个name
  component: () => import('@/views/checkList'),
  meta: {
    title: '盘点单'
  }
}
