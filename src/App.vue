<template>
  <div id="app">
    <Headers class="fix-header" />
    <router-view style="padding-top:50px;"/>
  </div>
</template>

<script>
import Headers from './components/header'

export default {
  name: 'App',
  components: {
    Headers
  }
}
</script>

<style lang='scss'>
html,body,#app{width:100%;height:100%;margin:0;padding:0;;background: rgb(241,243,244);}
</style>
