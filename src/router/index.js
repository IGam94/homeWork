import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardView from '../views/CardUiView.vue'
import FormView from '../views/FormUiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/card',
      name: 'card',
      component: CardView
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    },
  ]
})

export default router
