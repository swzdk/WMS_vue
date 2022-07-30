import Layout from '@/Layout'
import warehouse from './store_manage'
import area from './store_area_manage'
import location from './store_location_manage'
import locationView from './store_location_view'
import goods from './goods_manage'
import goodsType from './goods_type_manage'
import storeCreate from './store_create'
import storeEdit from './store_edit'

export default {
  // 二级路由但没有独立页面，直接关联Layout
  path: '/manage-base-info', // 路径
  name: 'bdmanage', // 给路由规则加一个name
  component: Layout, // 组件,
  meta: {
    title: '基础信息管理',
    icon: 'xinxiguanli'
  },
  children: [
    // 仓库管理
    warehouse,
    // 库区管理
    area,
    // 库位管理
    location,
    // 库位视图
    locationView,
    // 货品管理
    goods,
    // 货品类型管理
    goodsType,
    // 新增仓库
    storeCreate,
    // 编辑仓库
    storeEdit
  ]
}
