import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WishList from '../views/WishList.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/wishlist',
		name: 'wishlist',
		component: WishList
	}
]

const router = new VueRouter({
	mode: 'history',
	// eslint-disable-next-line no-undef
	base: process.env.BASE_URL,
	routes
})

export default router
