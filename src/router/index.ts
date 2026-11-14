import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../modules/views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Mover Fashion | Página Inicial'
      },
    }
  ],
})

export default router
