<template>
  <div class="login_container">
    <div class="login-box">
      <h2>后台管理系统</h2>
      <!-- 表单 开始 -->
      <el-form ref="loginFormRefs"
               :model="loginForm"
               :rules="loginFormRules"
               label-width="0px"
               class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"
                    prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!-- end -->
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password"
                    prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
        <!-- end -->
        <el-form-item class="btns">
          <el-button type="primary"
                     @click="login">登录</el-button>
          <el-button type="info"
                     @click="resetLogin"> 重置 </el-button>
        </el-form-item>
      </el-form>
      <!-- end -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginFormRefs.validate(async (valid) => {
        if (!valid) return false
        // 请求 post 登陆
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登陆失败')
        // 获取 token 存入到浏览器缓存中
        // 需要在路由里面做页面拦截处理
        window.sessionStorage.setItem('token', res.data.token)
        // 页面提示
        this.$message.success('登陆成功！')
        // 跳转页面
        this.$router.push('/home')
      })
    },
    resetLogin () {
      // 重置表单
      this.$refs.loginFormRefs.resetFields()
    }
  }
}
</script>

<style style="less" scope>
.login_container {
  background: #2b4b6b;
  height: 100%;
  margin: 0;
  position: relative;
}
.login-box {
  position: absolute;
  width: 430px;
  height: 300px;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login-box h2 {
  text-align: center;
}
.login_form {
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
