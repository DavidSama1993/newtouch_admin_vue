<template>
  <div class="page-bg">
    <div class="logo-wrap">
      <div class="logo-box">
        <div class="logo"></div>
      </div>
    </div>
    <div class="login-box">
      <div class="login-form">
        <label class="input-wrap clear">
          <i class="icon el-icon-user float-left"></i>
          <el-input
            class="username float-left"
            v-model="username"
            placeholder="请输入账号..."
            :clearable="true"
            autocomplete="off"
            spellcheck="false"
            maxlength="20"
            @keydown.enter.native="checkForm"
          ></el-input>
        </label>
        <label class="input-wrap clear">
          <i class="icon el-icon-lock float-left"></i>
          <el-input
            class="password float-left"
            v-model="password"
            type="password"
            placeholder="请输入密码..."
            :clearable="true"
            maxlength="20"
            @keydown.enter.native="checkForm"
          ></el-input>
        </label>
        <div class="remember">
          <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
        </div>
        <div class="login-commit" @click="checkForm">登 录</div>
        <div class="problem clear">
          <a href="" class="float-left">忘记密码?</a>
          <a href="" class="float-right">注册账号</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { login } from '@/api/auth'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      rememberPassword: false
    }
  },
  methods: {
    ...mapActions(['login']),
    checkForm() {
      if ( !this.username.trim() || !this.password.trim() ) {
        this.$message({
          message: '用户名和密码不能为空',
          type: 'warning',
          duration: 3000
        })
        return
      } else {
        this.commit()
      }
    },
    commit() {
      this.login({
        username: this.username,
        password: this.password
      }).then(data => {
        this.$message({
          message: '登录成功',
          type: 'success',
          duration: 3000
        })
        localStorage.setItem('userInfo', JSON.stringify(data.data.userInfo))
        this.output('登录成功：', data)
        // window.location.reload()
      }).catch(err => {
        this.$message({
          message: '登录失败：' + err,
          type: 'warning',
          duration: 3000
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-bg {
  width: 100%;
  height: 100%;
  background: url('~@/assets/login-bg_1920×1080.jpg');
  position: relative;
  .logo-wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(
      to bottom,
      rgba(204, 204, 255, 0.2) 0,
      rgba(204, 204, 255, 0.1) 15%,
      rgba(204, 204, 255, 0) 50%,
      rgba(204, 204, 255, 0.1) 85%,
      rgba(204, 204, 255, 0.2) 100%
    );
    .logo-box {
      position: absolute;
      left: 200px;
      height: 100%;
      border-left: 5px double #ccf;
      .logo {
        position: absolute;
        width: 220px;
        height: 33px;
        background: url('~@/assets/logo_opacity2.png') no-repeat;
        background-position-x: 20px;
        top: 80%;
        transform: translateY(-50%);
        padding-left: 20px;
        &::after {
          content: '';
          position: absolute;
          width: 300%;
          top: 140%;
          border-bottom: 5px double #ccf;
          margin-left: -100px;
        }
      }
    }
  }
  .login-box {
    position: absolute;
    z-index: 2;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 50px 60px;
    background: rgba(0, 0, 0, 0.3);
    background-position: center;
    box-shadow: inset 0 0 5px #ccf, 0 0 5px #ccf;
    border-radius: 4px;
    .login-form {
      color: #fff;
      .input-wrap {
        display: block;
        height: 36px;
        margin-bottom: 20px;
        .icon {
          width: 30px;
          font-size: 18px;
          line-height: 36px;
        }
        /deep/ .el-input {
          width: calc(100% - 30px);
          .el-input__inner {
            height: 36px;
            line-height: 36px;
            border: none;
            border-bottom: 1px solid #999;
            border-radius: 0;
            background: transparent;
            color: #fff;
          }
        }
      }
      .remember {
        height: 36px;
        line-height: 36px;
        /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
          color: #fff;
        }
      }
      .login-commit {
        height: 28px;
        line-height: 28px;
        text-align: center;
        background: #409eff;
        border-radius: 4px;
        margin-bottom: 20px;
        cursor: pointer;
        &:hover {
          background: #66b1ff;
        }
      }
      .problem a {
        color: #fff;
        &:hover {
          color: #409eff;
        }
      }
    }
  }
}
</style>
