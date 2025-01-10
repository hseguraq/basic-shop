import Catalog from '@/views/Catalog.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PDP from '@/views/PDP.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog,
    },
    {
      path: '/product/:id',
      name: 'PDP',
      component: PDP,
    },
  ],
})

export default router
