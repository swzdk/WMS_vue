import request from '@/utils/requestIps'

// 库区使用情况
export const getAreaUseStatus = () =>
  request({
    method: 'GET',
    url: '/home/areaUseStatus'
  })

// 库区使用情况
export const getStockUseStatus = () =>
  request({
    method: 'GET',
    url: '/home/stockUseStatus'
  })

// 待办信息
export const getTodo = () =>
  request({
    method: 'GET',
    url: '/home/todo'
  })

// 出入库信息
export const getInOutData = (dimension) =>
  request({
    method: 'GET',
    url: `/home/sumList?dimension=${dimension}`
  })
