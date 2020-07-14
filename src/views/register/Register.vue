<template>
  <div class="login">
    <div class="toHome" @click="toHome">回首页</div>
    <div class="login-center">
      <div class="textLogin">注册</div>
      <el-row>
        <el-col :span="12" class="img">
          <img src="./img/login.jpg" alt="">
        </el-col>
        <el-col :span="12" class="shuju">
          <el-form  label-width="80px" :model="register">
            <el-form-item label="用户名:">
              <input type="text" v-model="register.userName" class="userName" placeholder="账户">
            </el-form-item>
            <el-form-item label="性别:">
               <el-radio v-model="register.sex" label="1">男</el-radio>
               <el-radio v-model="register.sex" label="2">女</el-radio>
            </el-form-item>
            <el-form-item label="密码:">
              <input type="password" name="" id="" v-model="register.password" class="password" placeholder="密码">
            </el-form-item>
            <el-form-item label="确认密码:">
              <input type="password" name="" id="" v-model="register.passwordqr" class="password" placeholder="确认密码">
            </el-form-item>
            <div class="foot">
              <div>注册</div>
            </div>
            <div class="noNo">
              <span>有账号？</span>
              <span class="zhuce" @click="toLogin">登录</span>
            </div>
          </el-form>
        </el-col>
      </el-row>
      
    </div>
  </div>
</template>
<script>
export default {
   data() {
      return {
        register: {
          userName: '',
          sex: '',
          password: '',
          passwordqr: ''
        }
      }
   },
   computed: {
     loginVisible() {
      return this.$store.state.loginVisible
    }
   },
   methods: {
     changeLogin() {
       this.$store.commit('changeLoginVisible')
     },
     toLogin() {
       this.$router.push('/login')
     },
     toHome() {
       this.$router.push('/home')
     }
   },
   created() {
   },
   mounted() {
   }
}
</script>

<style scoped>
  .toHome {
    float: right;
    margin: 20px 40px 0 0;
    color: #fff;
    cursor: pointer;
  }
  .login {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('./img/login_bg.jpg');
    background-size: 100%;
  }
  .login-center {
    position: absolute;
    top: 25%;
    left: 30%;
    height: 432px;
    width: 623px;
    background-color: #fff;
    border-radius: 20px;
  }
   .textLogin {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    color: #ED429E;
  }
  .el-form {
    position: relative;
  }
  .foot {
    position: absolute;
    left: 30%;
    bottom: -60px;
    transform: translateX(-50%);
  }
  .img img {
    width: 100%;
    margin-top: 100px;
  }
  .shuju {
    position: relative;
    margin-top: 100px;
    /* margin-right: 10px; */
  }
  .el-form-item {
    margin-left: -62px;
  }
  input {
    width: 250px;
    height: 40px;
    padding: 10px;
    padding-left: 45px;
    border: none;
    background-color: #fff;
    outline: none;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }
  .foot div {
    position: absolute;
    right: -75px;
    bottom: 0;
    height: 40px;
    width: 180px;
    background: linear-gradient(to right, #e840a2, #8d39f7);
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    cursor: pointer;
  }
  input:-webkit-autofill , textarea:-webkit-autofill, select:-webkit-autofill {
	-webkit-text-fill-color: #ededed !important;
	-webkit-box-shadow: 0 0 0px 1000px transparent  inset !important;
  background-color:transparent;
  background-image: none;
  transition: background-color 50000s ease-in-out 0s;
  }
  input {
    background-color:transparent;
  }
  .noNo {
    position: absolute;
    position: absolute;
    bottom: -90px;
    left: 190px;
  }
  .noNo .zhuce {
    color: #ed429e;
    cursor: pointer;
  }
</style>