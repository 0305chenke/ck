<template>
<div id="css">
   <el-link type="success" href="http://houdunren.gitee.io/note/css/1%20%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html">CSS文档</el-link>
   <el-divider></el-divider>
   <div v-html="css"></div>
</div>
</template>
<script>
import css from './md/css.md'
export default {
   data() {
      return {
        css: css
      }
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
  div {
    font-size: 20px;
    line-height: 20px;
  }
</style>