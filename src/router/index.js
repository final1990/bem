import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/modules/Main'
import Welcome from '@/modules/default/welcom'
import HelloWorld from '@/modules/default/HelloWorld'

Vue.use(Router)




export default new Router({
  routes: [{
    path: '/',
    component: Main,
    children: [{
        path: '',
        component: Welcome
      },
      {
        path: 'helloworld',
        component: HelloWorld
      }
    ]
  }]
})