<template>
  <div class="login_container">
    <div class="login-box">
      <h2>后台管理系统</h2>
      <!-- 表单 开始 -->
      <el-form ref="loginFormRefs"
               :model="loginForm"
               label-width="0px"
               class="login_form">
        <!-- 用户名 -->
        <el-form-item>
          <el-input v-model="loginForm.username"
                    prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!-- end -->
        <!-- 密码 -->
        <el-form-item>
          <el-input v-model="loginForm.password"
                    prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
        <!-- end -->
        <el-form-item class="btns">
          <el-button type="info"> 重置 </el-button>
          <el-button type="primary"
                     @click="login">登录</el-button>
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
      }
    }
  },
  methods: {
    login () {
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
