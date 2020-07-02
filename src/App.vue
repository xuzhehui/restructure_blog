<template>
  <div id="app">
    <Headers class="fix-header" />
    <div class='link_view'>
      <Row class-name="view_row" type='flex'>
        <i-col :sm='{span:16}' :xs='{span:24}'><router-view/></i-col>
        <i-col  class='view-right' :md='{span:8}' :sm='{span:8}' :xs='{span:0}'><RightView/></i-col>
      </Row>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Headers from './components/header'
import RightView from './components/right_view'

export default {
  name: 'App',
  components: {
    Headers,RightView
  }
}
</script>

<style lang='scss'>
html,body,#app{width:100%;height:100%;margin:0;padding:0;;background: rgb(241,243,244);
  .link_view{padding-top:50px;display: flex;height:100%;
    .view_row{width:100%;height:100%;
      .view-right{position:fixed;right:20px;}
    }
  }
}
</style>
