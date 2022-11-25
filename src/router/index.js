import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/magazine',
    name: 'magazine',
    component: () => import('../views/articles/MagazinePage.vue')
  },
  {
		path: '/magazine/:id',
		name: 'ArticlePage',
		component: () => import('../views/articles/ArticlePage.vue')
	},
  {
    path: '/podcasts',
    name: 'podcasts',
    component: () => import('../views/podcasts/PodcastsPage.vue')
  },
  {
    path: '/podcasts/:id',
    name: 'PodcastPage',
    component: () => import('../views/podcasts/PodcastPage.vue')
  },
  {
    path: '/authors',
    name: 'authors',
    component: () => import('../views/authors/AuthorsPage.vue')
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
