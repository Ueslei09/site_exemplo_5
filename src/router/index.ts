import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../modules/views/HomeView.vue'
import BolsasMulheresView from '../modules/Bolsa-mulheres/view/BolsasMulheresView.vue'


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
      

    },
    {
      path: '/bolsas-femininas',
      name: 'BolsasMulheres',
      component: BolsasMulheresView,
      meta: {
        title: 'Mover Fashion | Bolsas Femininas'
      }
    }
  ],
})

export default router
