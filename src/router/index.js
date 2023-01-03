// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('@/views/app/Layout.vue'),

    children: [
      {
        path: '',
        component: () => import('@/views/app/routes/Home.vue'),
      },
      {
        path: 'copytrade',
        component: () => import('@/views/app/routes/Copytrade.vue'),
      },
      {
        path: 'withdrawRequest',
        component: () => import('@/views/app/routes/WithdrawRequest.vue'),
      },
      {
        path: 'transactions',
        component: () => import('@/views/app/routes/Transactions.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
