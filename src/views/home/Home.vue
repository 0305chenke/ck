<template>
  <el-container>
    <el-header>
      <div class="navBar">
        <el-row>
          <el-col :span="6">
             <span class="my">我的个人空间</span>
          </el-col>
          <el-col :span="14">
             <el-menu  
             class="el-menu-demo" 
             mode="horizontal"
             active-text-color="#00A4FF">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">个人中心</el-menu-item>
              <el-menu-item index="3">我的笔记</el-menu-item>
              <el-menu-item index="4">我的随机</el-menu-item>
              <el-menu-item index="5">关于</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="4" class="right">
            <span @click="changeLogin">登录</span>
            <el-divider direction="vertical"></el-divider>
            <span>注册</span>
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
    </el-header>
    <el-main>
      <div class="w"></div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import Login from '../login/Login'
import Wx from '../wx/Wx'
export default {
   components: {
     Login,
     Wx
   },
   data() {
      return {
        wxFlag: false
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
     }
   },
   created() {
   },
   mounted() {
   }
}
</script>

<style>
  .el-main {
    padding: 0!important;
  }
  .w {
    width: 1300px;
    background-color: rgb(5, 219, 137);
    height: 100%;
    margin: 0 auto;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none!important;
  }
  .el-container {
    height: 100%;
  }
  .el-header {
    height: 55px;
  }
  .el-main {
    height: 100%;
    background-color: azure;
  }
  .el-footer {
    height: 55px;
    background-color: blue;
  }
  .navBar {
    position: relative;
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