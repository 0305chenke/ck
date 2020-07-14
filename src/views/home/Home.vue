<template>
  <el-container>
    <el-header>
      <Head></Head>
    </el-header>
    <el-main>
      <div class="w">
         <div class="huanying">欢迎访问我的个人网站</div>
         <div class="box"></div>
          <div class="fanzhuan">
              <div class="zm">欢迎访问~</div>
              <div class="fm">welcome~</div>
          </div>
      </div>
    </el-main>
    <el-footer>
      <Foot></Foot>
    </el-footer>
  </el-container>
</template>
<script>
import Head from '../../components/head/Head'
import Foot from '../../components/foot/Foot'
export default {
   components: {
     Head,
     Foot
   },
   data() {
      return {
        
      }
   },
   computed: {

   },
   methods: {
    
   },
   created() {
   },
   mounted() {
   }
}
</script>

<style scoped>
   .el-main {
     position: relative;
     padding: 0!important;
     height: 100%;
     background: url('./img/home_bg.jpg') no-repeat;
     background-size: 100%;
     background-color: #FF948E;
     overflow: hidden;
     
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
  .el-footer {
    height: 65px;
    background-color: rgb(235, 233, 233);
  }
  
  .w {
    width: 1300px;
    background-color: transparent;
    height: 100%;
    margin: 0 auto;
  }
  .box {
          margin-top: 420px;
          width: 200px;
          height: 100px;
          background: url('./img/xiong.png') no-repeat;
          animation: bear 1s steps(8) infinite,w 6s linear forwards;
        }
  @keyframes bear {
      0% {
          background-position: 0 0;
      }
      100% {
          background-position: -1600px 0;
      }
  }
  @keyframes w {
      0% {}
      100% {
          transform: translateX(1000px);
      }
  }
  .huanying {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(to bottom, #EC4988, #04C0A8);
    background-clip: text;
    color: transparent;
    font-size: 32px;
  }
  .fanzhuan {
      position: relative;
      top: -281px;
      width: 200px;
      height: 200px;
      margin: 0 auto;
      transform-style: preserve-3d;
      transition: all 1s;
      animation:  zhuan 3s infinite;
      animation-direction:alternate-reverse
  }
  .zm,
  .fm {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      /* background-color: #D54B41; */
      background: linear-gradient(to top, #D54B41 50%, #333146 50%);
      text-align: center;
      line-height: 200px;
      backface-visibility:hidden;
      color: #fff;
      font-size: 22px;
      font-weight: 700;
  }

  .fm {
      transform: rotateY(180deg);
      background-color: #333146;
  }

  @keyframes zhuan {
    0% {}
    100% {transform: rotateY(180deg);}
  }
</style>