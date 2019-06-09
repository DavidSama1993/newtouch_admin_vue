export default {
  token: state => state.user.token,
  adminId: state => state.user.userInfo.adminId,
  isAdmin: state => state.user.userInfo.isAdmin,
  password: state => state.user.userInfo.password,
  realname: state => state.user.userInfo.realname,
  roleId: state => state.user.userInfo.roleId,
  roleName: state => state.user.userInfo.roleName,
  uid: state => state.user.userInfo.uid,
  username: state => state.user.userInfo.username,
  permissionList: state => state.user.permissionList,
}