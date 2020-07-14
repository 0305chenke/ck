<template>
  <el-container>
    <el-header>
      <Head></Head>
    </el-header>
    <el-main>
      <nav>
          <ul>
            <el-tooltip content="姓名" placement="top" effect="light" :enterable="false">
                  <li><span><i class="el-icon-user" aria-hidden="true">：陈可</i></span></li>
            </el-tooltip>
            <el-tooltip content="性别" placement="top" effect="light" :enterable="false">
                  <li><span><i class="iconfont icon-V" aria-hidden="true">：男</i></span></li>
            </el-tooltip>
            <el-tooltip content="身高" placement="top" effect="light" :enterable="false">
                  <li><span><i class="iconfont icon-iconsg" aria-hidden="true">：179</i></span></li>
            </el-tooltip>
            <el-tooltip content="体重" placement="top" effect="light" :enterable="false">
              <li><span><i class="iconfont icon-ziyuan" aria-hidden="true">：78</i></span></li>
            </el-tooltip>
            <el-tooltip content="籍贯" placement="top" effect="light" :enterable="false">
              <li><span><i class="iconfont icon-zhuzhi" aria-hidden="true">：山东</i></span></li>
            </el-tooltip>
            <el-tooltip content="现住址" placement="top" effect="light" :enterable="false">
              <li><span><i class="iconfont icon-zhuzhi_chengshi" aria-hidden="true">：北京</i></span></li>
            </el-tooltip>
            <el-tooltip content="年龄" placement="top" effect="light" :enterable="false">
              <li><span><i class="iconfont icon-nianling" aria-hidden="true">：25</i></span></li>
            </el-tooltip>
            <el-tooltip content="爱好" placement="top" effect="light" :enterable="false">
              <li><span><i class="iconfont icon-aihao" aria-hidden="true">：足球</i></span></li>
            </el-tooltip>
            <el-tooltip content="工作" placement="top" effect="light" :enterable="false">
              <li><span><i class="iconfont icon-34" aria-hidden="true">：it</i></span></li>
            </el-tooltip>
          </ul>
      </nav>
    </el-main>
    <el-footer>
      <Food></Food>
    </el-footer>
  </el-container>
</template>
<script>
import Head from '../../components/head/Head'
import Food from '../../components/foot/Foot'
export default {
   data() {
      return {
      }
   },
   components: {
     Head,
     Food
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
  .main {
    margin: 100px auto;
    width: 500px;
    height: 400px;
    background-color: white;
    opacity: 0.3;
    font-size: 22px;
    border-radius: 15px;
  }
  .nei {
    padding-top: 80px;
    margin-left: 150px;
    margin-right: 4s0px;
    line-height: 50px;
  }
  .nei div {
    padding-right: 50px;
    border-bottom: 1px dashed #ccc;
  }
  /* .nei div span:nth-child(2) {
    float: right;
  } */

  * {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    body {
        width: 100vw;
        height: 100vh;
        background: #2c3e50;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav {
        margin: 100px auto;
        width: 400px;
        height: 400px;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

    }

    nav::after {
        content: '个人简介';
        color: #ecf0f1;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        font-weight: bold;
        text-shadow: 3px 3px 0px #34495e;
        z-index: 1;
    }

    nav::before {
        content: '';
        width: 200px;
        height: 200px;
        background: #C80000;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    nav:hover ul {
        transform: scale(1);
    }

    ul {
        width: 300px;
        height: 300px;
        transform: scale(0);
        transition: .5s;
    }

    ul li {
        width: 80px;
        height: 80px;
        background: #C80000;
        border-radius: 50%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: white;
        transition: 1s;
        transform-origin: 150px 150px;
        box-shadow: 0 0 15px rgba(0, 0, 0.8);
    }

    ul li span {
        transition: 1s;
    }

    nav:hover li:nth-child(1) {
        transform: rotate(40deg);
    }

    nav:hover li:nth-child(1)>span {
        transform: rotate(1040deg);
    }

    nav:hover li:nth-child(2) {
        transform: rotate(80deg);
    }

    nav:hover li:nth-child(2)>span {
        transform: rotate(1000deg);
    }

    nav:hover li:nth-child(3) {
        transform: rotate(120deg);
    }

    nav:hover li:nth-child(3)>span {
        transform: rotate(960deg);
    }

    nav:hover li:nth-child(4) {
        transform: rotate(160deg);
    }

    nav:hover li:nth-child(4)>span {
        transform: rotate(720deg);
    }

    nav:hover li:nth-child(5) {
        transform: rotate(200deg);
    }

    nav:hover li:nth-child(5)>span {
        transform: rotate(880deg);
    }

    nav:hover li:nth-child(6) {
        transform: rotate(240deg);
    }

    nav:hover li:nth-child(6)>span {
        transform: rotate(1680deg);
    }

    nav:hover li:nth-child(7) {
        transform: rotate(280deg);
    }

    nav:hover li:nth-child(7)>span {
        transform: rotate(1920deg);
    }

    nav:hover li:nth-child(8) {
        transform: rotate(320deg);
    }

    nav:hover li:nth-child(8)>span {
        transform: rotate(2200deg);
    }

    nav:hover li:nth-child(9) {
        transform: rotate(360deg);
    }

    nav:hover li:nth-child(9)>span {
        transform: rotate(2520deg);
    }
</style>