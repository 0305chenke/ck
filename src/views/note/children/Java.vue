<template>
  <div class="java">
    <div v-html="java"></div>
  </div>
</template>
<script>
import Java from './md/java.md'
export default {
   data() {
      return {
        java: Java
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

<style>
</style>