import { createRouter, createWebHistory } from 'vue-router'
import ContentPage from '../components/ContentPage.vue'
import PayPage from '../components/PayPage.vue'
import AuthPage from '../components/AuthPage.vue'

const routes = [
  {
    path: '/',
    component: ContentPage
  },
  {
    path: '/pay',
    component: PayPage
  },
  {
    path: '/authorization',
    component: AuthPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
