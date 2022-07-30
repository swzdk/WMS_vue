import axios from 'axios'
import { Message } from 'element-ui'

const request = axios.create({
  baseURL: '/api'
})
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiNTJlYWUxMS0yYWZiLTQwYjUtODg3NC01OTEwOGU0YjI0NjUiLCJzdWIiOiJ7XCJyb2xlXCI6XCJST0xFX0FETUlOXCIsXCJ0eXBlXCI6XCIyXCIsXCJ1c2VybmFtZVwiOlwiYWRtaW5cIn0iLCJpc3MiOiJhZG1pbiIsImlhdCI6MTYwNjM3MTA3NiwiZXhwIjoxNjA2OTc1ODc2fQ.pCl45pY_v2w8rZU8l60UI4cQx-Ufl7DRw0rZqhY8zeE'
request.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`
  return config
})

request.interceptors.response.use(({ data: { data, isSuccess, msg } }) => {
  if (isSuccess) {
    return data
  } else {
    Message.error(msg || '服务器错误！')
    return Promise.reject(msg || '服务器错误！')
  }
})
export default request
