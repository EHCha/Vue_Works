import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'
import CreateView from '../views/CreateView.vue'
import DetailView from '../views/DetailView.vue'
import NotFound404 from '../views/NotFound404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  },
  {
    // 숫자가 앞에 오게 되면위의 숫자 path에 걸리게 될수있으므로 아예 path를 바꾸거나 위에오게 해야함
    path: '404-not-found',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    // 변수가 동적으로 라우팅 되고 있다 ex :id
    path: '/:id',
    name: 'detail',
    component: DetailView
  },
  {
    path: '*',
    redirect: { name: 'NotFound404' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
