import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';

// import iview  style
import 'view-design/dist/styles/iview.css';



import router from './router/index'

Vue.config.productionTip = false
Vue.use(ViewUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
