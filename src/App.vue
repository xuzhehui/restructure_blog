<template>
  <div id="app">
    <Login/>
  </div>
</template>

<script>
import Login from './view/home.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style lang='scss'>
html,body,#app{width:100%;height:100%;margin:0;padding:0;;background: rgb(241,243,244);}
</style>
