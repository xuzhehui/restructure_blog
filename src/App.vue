<template>
  <div id="app">
    <Headers class="fix-header" />
    <div class='link_view'>
      <Row class-name="view_row" type='flex'>
        <i-col :sm='{span:16}' :xs='{span:24}'><transition :name="transitionName"><router-view/></transition></i-col>
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
  },
  data(){
    return {
      transitionName:'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      let toName = to.name
      const toIndex = to.meta.index
      const fromIndex = from.meta.index

      this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang='scss'>
html{overflow-y:scroll;}
html,body,#app{width:100%;height:100%;margin:0;padding:0;;background: rgb(241,243,244);;
  .link_view{padding-top:50px;display: flex;height:100%;
    .view_row{width:100%;height:100%;
      .view-right{position:fixed;right:20px;}
    }
  }
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
