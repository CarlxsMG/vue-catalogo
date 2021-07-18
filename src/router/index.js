import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductosPage from '../views/productos/ProductosPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductosPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
