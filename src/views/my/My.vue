<template>
  <el-container>
    <el-header>
      <Head></Head>
    </el-header>
    <el-main>
      <div class="mingyan">
        <p>必定光芒万丈</p>
      </div>
      <div class="main">
        <div v-for="(item, index) in data" :key="index">
          <h3>{{item.name}}</h3>
          <ul>
            <li v-for="(i, index) in item.text" :key="index">{{i}}</li>
          </ul>
        </div>
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
            name: '我喜欢的运动',
            text: ['羽毛球', '网球', '足球', '爬山', '看海']
          },
          {
            name: '我喜欢的书',
            text: ['《平凡的世界》', '《狼图腾》', '《盗墓笔记》']
          },
          {
            name: '我喜欢节目',
            text: ['中国足球超级联赛', '足协杯', '亚冠']
          },
          {
            name: '我的小目标',
            text: ['蒙古自驾游', '云南大理', '四川成都美食']
          }
        ]
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
  .mingyan {
    float: right;
    color: #ccc;
  }
  .main {
    margin: 0 auto;
    width: 1300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
 .main div {
   width: 300px;
   height: 400px;
   border: 1px solid #ccc;
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
   margin-bottom: 15px;
   text-align: center;
   cursor: pointer;
   /* color: #fff; */
   opacity: 0.7;
   transition: all 0.4s;
 }
 .main div:hover {
   opacity: 1;
   transform: scale(1.02);
 }
 .main div:nth-child(1) {
   background: url('./img/ymq.jpg');
   background-size: 100%;
 }
 .main div:nth-child(2) {
   background: url('./img/pf.jpg');
   background-size: 100%;
 }
 .main div:nth-child(3) {
   background: url('./img/ln.jpg');
   background-size: 100%;
 }
 .main div:nth-child(4) {
   background: url('./img/cd.jpg');
   background-size: 100%;
   color: #fff;
 }
 .main div ul {
   list-style: none;
 }
 .main div h3 {
   height: 30px;
   line-height: 30px;
   border-bottom: 1px dashed rgb(153, 153, 153);
   margin-bottom: 30px;
 }
 .main div li {
   padding-top: 5px;
   padding-bottom: 5px;
 }
</style>