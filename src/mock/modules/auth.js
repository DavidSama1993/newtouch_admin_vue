import { output } from '@/utils'
import md5 from 'md5'

const userList = [
  {
    uid: 1,
    username: 'admin1',
    password: '25d55ad283aa400af464c76d713c07ad',
    realname: '管理员1',
    isAdmin: 1,
    adminId: 1,
    roleId: 1,
    roleName: '管理员',
    token: 'e00cf25ad42683b3df678c61f42c6bda'
  },
  {
    uid: 2,
    username: 'admin2',
    password: 'bf709005906087dc1256bb4449d8774d',
    realname: '管理员2',
    isAdmin: 1,
    adminId: 2,
    roleId: 1,
    roleName: '管理员',
    token: 'c84258e9c39059a89ab77d846ddab909'
  },
  {
    uid: 3,
    username: 'user1',
    password: '25f9e794323b453885f5181f1b624d0b',
    realname: '普通用户1',
    isAdmin: 0,
    adminId: 0,
    roleId: 2,
    roleName: '领导',
    token: '24c9e15e52afc47c225b757e7bee1f9d'
  },
  {
    uid: 4,
    username: 'user2',
    password: 'c44a471bd78cc6c2fea32b9fe028d30a',
    realname: '普通用户2',
    isAdmin: 0,
    adminId: 0,
    roleId: 3,
    roleName: '员工',
    token: '7e58d63b60197ceb55a1c487989a3720'
  }
]

const roleList = [
  {
    roleId: 1,
    roleName: '管理员',
    permissionList: []
  },
  {
    roleId: 2,
    roleName: '领导',
    permissionList: []
  },
  {
    roleId: 3,
    roleName: '员工',
    permissionList: []
  }
]

const usernameExist = username => {
  return userList.findIndex(item => item.username === username) > -1
}

const getAccountObj = username => {
  return userList.find(item => item.username === username)
}

const passwordCorrect = (password, accountObj) => {
  return accountObj.password === md5(password)
}

export function login(request) {
  const { body } = request
  const params = JSON.parse(body)
  const { username, password } = params
  if (!usernameExist(username)) {
    return {
      code: 401,
      data: null,
      message: '用户名不存在'
    }
  } else {
    let userInfo = getAccountObj(username)
    if (!passwordCorrect(password, userInfo)) {
      return {
        code: 401,
        data: null,
        message: '登录密码错误'
      }
    } else {
      return {
        code: 200,
        data: {
          userInfo: userInfo,
          permissionList: roleList[Math.floor(Math.random() * 3)].permissionList
        },
        message: '登录成功'
      }
    }
  }
}