// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'list-in', // 路径
  name: 'listIn', // 给路由规则加一个name
  component: () => import('@/views/instoreList'),
  meta: {
    title: '入库单'
  }
}
