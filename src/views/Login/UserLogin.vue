<template>
  <div>
    <el-form ref="user-login" :model="formData" :rules="rules" status-icon>
      <el-form-item prop="username">
        <el-input
          v-model="formData.username"
          prefix-icon="el-icon-user">
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          type="password"
          prefix-icon="el-icon-lock"
          v-model="formData.pwd"
          show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="login-btn"
          @click="userLogin"
          @keyup="userLogin"
          round>
          登陆
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'UserLogin',
  data () {
    return {
      formData: {
        username: 'admin',
        pwd: '123456'
      },
      checked: false,
      rules: {
        username: [
          { required: true, message: '必须填写用户名', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '必须填写密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    userLogin () {
      this.$refs['user-login'].validate(valid => {
        if (valid) {
          this.$message({
            message: '登陆成功',
            type: 'info',
            duration: 2000
          })
          this.$router.push({
            path: '/'
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .login-btn {
    width: 100%;
    letter-spacing: 50px;
    font-weight: bold;
  }
</style>
