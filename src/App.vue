<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Home from './views/home/Home'
export default {
  components: {
    Home
  }
}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    height: 100vh;
  }
</style>
