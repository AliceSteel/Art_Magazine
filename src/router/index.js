import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */'../views/HomeView.vue')
  },
  {
    path: '/magazine',
    name: 'magazine',
    component: () => import(/* webpackChunkName: "Magazine" */'../views/articles/MagazinePage.vue')
  },
  {
		path: '/magazine/:id',
		name: 'ArticlePage',
		component: () => import(/* webpackChunkName: "ArticlePage" */'../views/articles/ArticlePage.vue')
	},
  {
    path: '/podcasts',
    name: 'podcasts',
    component: () => import(/* webpackChunkName: "Podcasts" */'../views/podcasts/PodcastsPage.vue')
  },
  {
    path: '/podcasts/:id',
    name: 'PodcastPage',
    component: () => import(/* webpackChunkName: "PodcastPage" */'../views/podcasts/PodcastPage.vue')
  },
  {
    path: '/authors',
    name: 'authors',
    component: () => import(/* webpackChunkName: "Authors" */'../views/authors/AuthorsPage.vue')
  },
  {
    path: '/authors/:id',
    name: 'AuthorPage',
    component: () => import(/* webpackChunkName: "AuthorPage" */'../views/authors/AuthorPage.vue')
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
