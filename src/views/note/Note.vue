<template>
  <el-container>
    <el-header>
      <Head></Head>
    </el-header>
    <el-main>
       <div class="note" v-for="(item, i) in note" :key="i" @click="noteClick(item.path)">
          <img :src="item.img" alt="">
          <span>{{item.name}}</span>
       </div>
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
         note: ''
      }
   },
   components: {
     Head,
     Food
   },
   methods: {
      noteClick(path) {
         this.$router.push({path: path})
         console.log(path);
      }
   },
   created() {
      this.note =  [
         
            {
               id: 1,
               name: 'HTML',
               img: require('./img/html.png'),
               path: '/html'
            },
            {
               id: 2,
               name: 'CSS',
               img: require('./img/css.png'),
               path: '/css'
            },
            {
               id: 3,
               name: 'JavaScript',
               img: require('./img/js.png'),
               path: '/note/javascript'
            },
            {
               id: 4,
               name: 'Vue.js',
               img: require('./img/vue.png'),
               path: '/note/vue'
            },
            {
               id: 5,
               name: 'java',
               img: require('./img/java.png'),
               path: '/java'
            }
         ]
   },
   mounted() {
   }
}
</script>

<style scoped>
   .el-container {
      height: 100%;
   }
   .el-main {
     height: 100%;
     display: flex;
     flex-direction: row;
   }
   .note {
      position: relative;
      width: 250px;
      height: 300px;
      border: 1px solid #ccc;
      cursor: pointer;
      text-align: center;
      margin: 0 auto;
      overflow: hidden;
      box-sizing: border-box;
      transition: all 0.4s;
   }
   .note img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      max-width: 200px;
      min-width: 200px;
      margin: 0 auto;
   }
   .note span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      width: 100%;
      height: 35px;
      line-height: 35px;
      color: #fff;
      background-color: #C80000;
      display: none;
   }
   .note:hover span {
      display: block;
   }
   .note:hover {
      box-shadow: 0px 0px 5px #ccc;
      transform: scale(1.02);
   }
   
</style>