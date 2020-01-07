<template>
  <div>
    <el-form ref="phone-login" :model="formData" :rules="rules" status-icon>
      <el-form-item prop="phone">
        <el-input
          v-model="formData.phone"
          prefix-icon="el-icon-mobile-phone">
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          type="password"
          prefix-icon="el-icon-lock"
          v-model="formData.code"
          maxlength="4"
          show-password>
          <el-button slot="append">发送验证吗</el-button>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="login-btn"
          @click="phoneLogin"
          round>
          登陆
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'PhoneLogin',
  data () {
    return {
      formData: {
        phone: '15255046562',
        code: ''
      },
      rules: {
        phone: [
          { required: true, message: '填写正确的手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '填写正确的验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    phoneLogin () {
      this.$refs['phone-login'].validate(valid => {
        if (valid) {
          this.$message({
            message: '登陆成功',
            type: 'info',
            duration: 2000
          })
          this.$route.push({
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
