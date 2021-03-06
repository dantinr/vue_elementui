import Vue from 'vue'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: 'welcome',
    children: [{ path: '/welcome', component: Welcome }]
  }

]

const router = new VueRouter({
  routes
})

export default router
