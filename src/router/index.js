import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
          import('../App.vue'),
      meta: {
        layout: 'MerchantLayout',
      },
    },
  ]
})

export default router
