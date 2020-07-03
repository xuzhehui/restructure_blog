import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';

import store from './store/index'
import router from './router/index'


// import iview  style
import 'view-design/dist/styles/iview.css';
import axios from './axios/index'
Vue.prototype.axios = axios


Vue.config.productionTip = false

Vue.use(ViewUI);

//配置路由切换进度
router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  next();
});



router.afterEach(route => {
  ViewUI.LoadingBar.finish();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
