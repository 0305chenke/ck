<template>
<div class="navBar">
        <el-row>
          <el-col :span="6">
             <span class="my">我的个人空间</span>
          </el-col>
          <el-col :span="14">
             <el-menu  
             class="el-menu-demo"
             mode="horizontal"
             active-text-color="#C80000"
             :default-active="$route.path"
             :router="true"
             >
              <el-menu-item index="/home">首页</el-menu-item>
              <el-menu-item index="/my">个人中心</el-menu-item>
              <el-menu-item index="/note">我的笔记</el-menu-item>
              <el-menu-item index="/essay">我的随记</el-menu-item>
              <el-menu-item index="/about">关于</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="4" class="right">
            <span @click="changeLogin">登录</span>
            <el-divider direction="vertical"></el-divider>
            <span @click="toRegister">注册</span>
            <el-divider direction="vertical"></el-divider>
            <span class="el-icon-chat-dot-square" 
            @mouseenter="wxFlag=!wxFlag"
            @mouseleave="wxFlag=!wxFlag"></span>
          </el-col>
        </el-row>
        <el-dialog title="登录" :visible.sync="loginVisible" center :show-close="false">
          <Login></Login>
        </el-dialog>
        <Wx class="wx" v-if="wxFlag"></Wx>
      </div>
</template>
<script>
import Login from '../../views/login/Login'
import Wx from '../../views/wx/Wx'
export default {
  components: {
     Login,
     Wx
   },
   data() {
      return {
        wxFlag: false,
        activeIndex: '/home'
      }
   },
   computed: {
     loginVisible() {
      return this.$store.state.loginVisible
     }
   },
   methods: {
      changeLogin() {
      //  this.$store.commit('changeLoginVisible')
      this.$router.push('/login')
     },
     toRegister() {
       this.$router.push('/register')
     }
   },
   created() {
   },
   mounted() {
   }
}
</script>

<style scoped>
  .navBar {
    position: relative;
    top: 0;
    height: 100%;
    width: 1500px;
    margin: 0 auto;
    background-color: blueviolet;
    background: url('../../assets/logo.png') no-repeat;
    background-size: 60px;
  }
  .my {
    font-size: 24px;
    font-weight: 600;
    margin-left: 65px;
    line-height: 55px;
    color: #C80000;
    cursor: pointer;
    /* font-family:  Courier, monospace; */
  }
  .el-menu-item {
    font-size: 18px!important;
    margin: 0 auto;
  }
  .right {
    padding-left: 120px;
    line-height: 55px;
    cursor: pointer;
  }
  .right span:hover {
    color: #00A4FF;
  }
  .navBar .wx {
    position: absolute;
    top: 40px;
    right: 15px;
    z-index: 999;
  }
</style>