import request from '@/utils/request'

// 获取仓库列表
export const getStore = (params) =>
  request({
    method: 'GET',
    url: '/warehouse/page',
    params
  })

// 新增仓库
export const createStore = (data) =>
  request({
    method: 'POST',
    url: '/warehouse',
    data
  })

// 根据id查询仓库
export const searchStore = (id) =>
  request({
    method: 'GET',
    url: `/warehouse/${id}`
  })

// 修改仓库
export const editStore = (data) =>
  request({
    method: 'PUT',
    url: '/warehouse',
    data
  })
