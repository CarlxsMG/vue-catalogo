import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductosPage from '../views/productos/ProductosPage.vue'
import CategoriasPage from '../views/categorias/CategoriasPage.vue'
import ProductosPorCategoriaPage from '../views/productos/ProductosPorCategoriaPage.vue'

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
  {
    path: '/categorias',
    component: CategoriasPage,
    children: [
      {
        path: '/productos-categorias',
        name: 'categorias',
        component: ProductosPorCategoriaPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
