<template>
<div class="html">
   <div v-html="htmlMD"></div>
</div>
</template>
<script>
import html from './md/html.md'
export default {
   data() {
      return {
         htmlMD: html,
      }
   },
   methods: {
      open() {
          this.$message({
          dangerouslyUseHTMLString: true,
          duration:0,
          message: `
          <p class="yihang">`+this.data+`</p>`
        })
      },
      openAll() {
         console.log(1111);
         this.flag = !this.flag
         
      }
   },
   created() {
      console.log();
   },
   mounted() {
   }
}
</script>

<style>
   /* .html {
      position: relative;
   }
   .yihang {
      width: 200px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
   }
   .i {
      position: absolute;
      top: 70px;
      transform: translateX(-50%);
      left: 50%;
      z-index: 999;
      font-size: 22px;
      color: rgb(0, 17, 255);
   }
   .all {
     position: absolute;
     top: 90px;
     left: 50%;
     transform: translateX(-50%);
     width: 377px;
     height: 200px;
     overflow: auto;
     white-space: pre-wrap;
     background-color: #EDF2FC;
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
   } */
   ::-webkit-scrollbar {
   /*隐藏滚轮*/
   display: none;
   }
</style>