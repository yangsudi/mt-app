<template>
  <div class="login">
    <div class="login-box-left">
      <h4 class="login-box-header">登陆</h4>
      <div class="login-box-wrapper">
        <el-tabs v-model="activeName">
          <el-tab-pane label="用户密码" name="user">
            <user-login />
          </el-tab-pane>
          <el-tab-pane label="手机登陆" name="phone">
            <phone-login />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import UserLogin from './UserLogin'
import PhoneLogin from './PhoneLogin'
export default {
  name: 'Login',
  components: {
    UserLogin,
    PhoneLogin
  },
  data () {
    return {
      activeName: 'user'
    }
  }
}
</script>
<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00F260;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0575E6, #00F260);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0575E6, #00F260); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    .login-box-left {
      width: 500px;
      height: 300px;
      border-radius: 10px;
      padding: 50px;
      border: 1px solid #999;
      background: #ffffff;
      &:hover {
        box-shadow: 0 1px 20px #eeeeee;
      }
      .login-box-header {
        text-align: center;
        font-weight: bold;
        letter-spacing: 20px;
        color: #000;
      }
      .login-box-wrapper {
      }
    }
    .login-box-right {
      width: 200px;
      height: 450px;
      border: 1px solid #999999;
      background: #eeeeee;
      border-radius: 5px;
    }
  }
</style>
