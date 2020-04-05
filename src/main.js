import Vue from 'vue'
import App from './App.vue'

// vuetify을 사용하기 위해 import
import vuetify from './plugins/vuetify';
// router 을 사용하기 위해 import
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
