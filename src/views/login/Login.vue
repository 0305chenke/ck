<template>
  <el-card shadow="hover">
    <el-form  label-width="80px" :model="formLabelAlign">
      <el-form-item label="账号">
        <el-input v-model="login.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="login.password"></el-input>
      </el-form-item>
      <span class="foot">
        <el-button type="primary" @click="changeLogin">登录</el-button>
        <el-button @click="changeLogin">取消</el-button>
      </span>
    </el-form>
  </el-card>
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
     }
   },
   created() {
   },
   mounted() {
   }
}
</script>

<style scoped>
  .el-card {
    height: 200px;
    width: 500px;
    margin: 0 auto;
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
  .el-input {
    /* width: 50%; */
  }

</style>