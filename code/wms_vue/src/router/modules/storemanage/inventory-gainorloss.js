// path不要写/，拼接到二级路由上，并且关联页面
export default {
  path: 'storage-lose-profit', // 路径
  name: 'storageLoseProfit', // 给路由规则加一个name
  component: () => import('@/views/inventory-gainorloss'),
  meta: {
    title: '库存损益'
  }
}
