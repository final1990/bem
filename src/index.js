import Vue from 'vue'
import App from './app.vue'
import router from './router'
import './assets/styles/app.styl'
import './assets/styles/menu.styl'
import './assets/styles/header.styl'
import './assets/styles/body.styl'
require('font-awesome/css/font-awesome.min.css');



const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  router,
  beforeCreate() {
    console.log("beforeCreate")
  },
  render: (h) => h(App)
}).$mount(root)