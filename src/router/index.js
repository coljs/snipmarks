import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home'
import CreateSnipmarks from '../containers/CreateSnipmarks'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/create-snipmarks', name: 'Create Snipmarks', component: CreateSnipmarks }
]

export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
