<template>
  <div class="login">
    <div class="toHome" @click="toHome">回首页</div>
    <div class="login-center">
      <div class="textLogin">登录</div>
      <el-row>
        <el-col :span="12" class="img">
          <img src="./img/login.jpg" alt="">
        </el-col>
        <el-col :span="12" class="shuju">
          <el-form  label-width="80px" :model="login">
            <el-form-item>
              <i class="el-icon-user"></i>
              <input type="text" v-model="login.userName" class="userName" placeholder="账户">
            </el-form-item>
            <el-form-item>
              <i class="el-icon-lock"></i>
              <input type="password" name="" id="" v-model="login.password" class="password" placeholder="密码">
            </el-form-item>
            <div class="foot">
              <div>登录</div>
            </div>
            <div class="noNo">
              <span>没有账号？</span>
              <span class="zhuce" @click="toRegister">注册</span>
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
        login: {
          userName: '',
          password: ''
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
     toRegister() {
       this.$router.push('/register')
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
    left: 50%;
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
  i {
    position: absolute;
    top: 15px;
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
    bottom: -120px;
  }
  .noNo .zhuce {
    color: #ed429e;
    cursor: pointer;
  }
</style>