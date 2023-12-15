import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WishList from '../views/WishList.vue'
import SupportPage from '../views/SupportPage.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: '',
		component: HomeView
	},
	{
		path: '/wishlist',
		name: 'Wishlist',
		component: WishList,
	},
	{
		path: '/support',
		name: 'Support',
		component: SupportPage,
	}
]

const router = new VueRouter({
	mode: 'history',
	// eslint-disable-next-line no-undef
	base: process.env.BASE_URL,
	routes
})

export default router
