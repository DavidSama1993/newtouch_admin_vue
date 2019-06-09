import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/auth'

export default {
  state: {
    userInfo: {
      adminId: 0,
      isAdmin: 0,
      password: '',
      realname: '',
      roleId: 0,
      roleName: '',
      uid: 0,
      username: '',
      token: ''
    },
    token: getToken(),
    // avatar: '' // 头像，预留变量
    permissionList: []
  },
  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_PERMISSIONLIST: (state, permissionList) => {
      state.permissionList = permissionList
    }
  },
  actions: {
    login({ commit }, payload) {
      return new Promise((resolve, reject) => {
        login(payload).then(({ data }) => {
          if (data.code != 200) {
            reject(data.message || '服务器或网络异常')
            return
          }
          setToken(data.data.userInfo.token)
          commit('SET_USERINFO', data.data.userInfo)
          commit('SET_TOKEN', data.data.userInfo.token)
          resolve(data)
        }).catch(err => {
          reject(err || '服务器或网络异常')
        })
      })
    }
  }
}