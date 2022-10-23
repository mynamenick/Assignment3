import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
            path: '/',
            name: 'List',
            component: () => import('../components/List-Item')
        },
        {
            path: '/create',
            name: 'Create',
            component: () => import('../components/Create-Item')
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: () => import('../components/Edit-Item')
        }
]

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
})

export default router
