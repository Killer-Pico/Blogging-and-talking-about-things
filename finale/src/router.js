import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import DangerousridesComponent from './components/DangerousridesComponent.vue'
import RequestPage from './pages/RequestPage.vue'
import BlogTopicsPage from './pages/BlogTopicsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/dangerous-rides',
    name: 'Dangerousrides',
    component: DangerousridesComponent
  },
  {
    path: '/requests',
    name: 'Request',
    component: RequestPage
  },
  {
path: '/blog-topics',
name: 'BlogTopics',
component: BlogTopicsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes // ⬅️ передається масив з правильними об'єктами
})

export default router