import request from '@/utils/request'

// 获取下一个编号，仓库：CK
export const getNextCode = (name) =>
  request({
    method: 'GET',
    url: `/codeFactory/next/${name}`
  })
