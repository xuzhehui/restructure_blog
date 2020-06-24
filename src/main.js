import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import axios from 'axios'

// import iview  style
import 'view-design/dist/styles/iview.css';



import router from './router/index'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(ViewUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
