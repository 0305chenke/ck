<template>
  <el-container>
    <el-header>
      <Head></Head>
    </el-header>
    <el-main>
      <div class="suibi" v-for="(item, index) in data" :key="index">
        <h3>{{item.name}}</h3>
        <p>{{item.text}}</p>
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
        data: [
          {
            name: '今天天气不错',
            text: '今天是2020年7月13，天气：阴'
          },
          {
            name: '今天天气不错',
            text: '今天是2020年7月13，天气：阴'
          },
          {
            name: '今天天气不错',
            text: '今天是2020年7月13，天气：阴'
          }
        ],
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

<style>
   .el-container {
      height: 100%;
   }
   .el-main {
     height: 100%;
   }
   .suibi {
     width: 100%;
     height: 150px;
     border: 1px solid #ccc;
     margin-bottom: 10px;
     box-shadow: 2px 2px 2px #ccc;
   }
   .suibi h3 {
     text-align: center;
     margin-top: 5px;
   }
   .suibi p {
     text-indent: 2em;
   }
</style>