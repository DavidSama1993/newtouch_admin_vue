import request from '@/utils/request'

export const login = data => {
  return request.post('auth/login', data)
}