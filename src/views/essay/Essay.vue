<template>
  <el-container>
    <el-header>
      <Head></Head>
    </el-header>
    <el-main>
      <div class="suibi" v-for="(item, index) in data" :key="index" :style="{backgroundColor: item.color}" @click="suiBi(item)">
        <h3>{{item.name}}</h3>
        <p>{{item.text}}</p>
        <!-- <el-color-picker v-model="item.color"></el-color-picker> -->
      </div>
      <el-dialog
        :title="dataItem.name"
        :visible.sync="dialogVisible"
        width="50%"
        center>
        <span>这是一段信息</span>
        <div>{{dataItem.text}}</div>
        <div>{{dataItem.details}}</div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
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
            text: '今天是2020年7月13，天气：阴',
            color: '#E06C75',
            details: `完备性,优图护照OCR已支持识别国内外多个国家的护照识别，并已支持大部分的常用字段，
            包括英文姓名、国籍、签发日期、性别、护照号码等字段等信息。完备性,优图护照OCR已支持识别国内外多个国家的护照识别，并已支持大部分的常用字段，
            包括英文姓名、国籍、签发日期、性别、护照号码等字段等信息。完备性,优图护照OCR已支持识别国内外多个国家的护照识别，并已支持大部分的常用字段，
            包括英文姓名、国籍、签发日期、性别、护照号码等字段等信息。完备性,优图护照OCR已支持识别国内外多个国家的护照识别，并已支持大部分的常用字段，
            包括英文姓名、国籍、签发日期、性别、护照号码等字段等信息。完备性,优图护照OCR已支持识别国内外多个国家的护照识别，并已支持大部分的常用字段，
            包括英文姓名、国籍、签发日期、性别、护照号码等字段等信息。`
          },
          {
            name: '今天天气不错02',
            text: '今天是2020年7月14，天气：阴',
            color: '#ECA7DD'
          },
          {
            name: '今天天气不错03',
            text: '今天是2020年7月15，天气：阴',
            color: '#E06C75'
          },
          {
            name: '今天天气不错04',
            text: '今天是2020年7月16，天气：阴',
            color: '#ECA7DD'
          },
          {
            name: '今天天气不错05',
            text: '今天是2020年7月17，天气：阴',
            color: '#E06C75'
          }
        ],
        dialogVisible: false,
        dataItem: ''
      }
   },
   components: {
     Head,
     Food
   },
   methods: {
     suiBi(item) {
       this.dialogVisible = true
       this.dataItem = item
     }
   },
   created() {
   },
   mounted() {
   }
}
</script>

<style>
   .el-color-picker {
     float: right;
   }
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
     margin-bottom: 20px;
     box-shadow: 0 0 5px #9b9b9b;
     transition: all 0.5s;
     opacity: 0.6;
   }
   .suibi:hover {
     box-shadow:none;
     transform: scale(0.991);
     opacity: 1;
   }
   .suibi h3 {
     text-align: center;
     margin-top: 5px;
   }
   .suibi p {
     text-indent: 2em;
   }
</style>