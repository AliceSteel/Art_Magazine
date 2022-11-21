import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../views/articles/ArticlesPage.vue')
  },
  {
		path: '/articles/:name',
		name: 'ArticleN',
		component: () => import('../views/articles/ArticlePage.vue')
	},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
		return { 
			top: 0,
			behavior: 'smooth'
		}
	},
	base:'/FYRRE/'
})

export default router
