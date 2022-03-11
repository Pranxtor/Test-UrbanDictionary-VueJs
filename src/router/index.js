import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import GeneratorView from '../views/Generator.vue'
import NotFoundView from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/generator',
      name: 'generator',
      component: GeneratorView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
