import axios from 'axios'
import { Message } from 'element-ui'

const request = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
  timeout: 5000
})

// 请求拦截，可在config中修改请求配置
request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 响应拦截，可修改response预处理返回值
request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5000
    })
    Promise.reject(error)
  }
)

export default request