// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'list-out', // 路径
  name: 'listOut', // 给路由规则加一个name
  component: () => import('@/views/outstore'),
  meta: {
    title: '出库单'
  }
}
