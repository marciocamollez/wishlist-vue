import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WishList from '../views/WishList.vue'
import SupportPage from '../views/SupportPage.vue'
import PageNotFound from '../components/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: '',
		component: HomeView,
		meta: {
			title: 'Home - Luiza Labs',
		}
	},
	{
		path: '/wishlist',
		name: 'Wishlist',
		component: WishList,
		meta: {
			title: 'Wishlist - Luiza Labs',
		}
	},
	{
		path: '/support',
		name: 'Support',
		component: SupportPage,
		meta: {
			title: 'About - Luiza Labs',
		}
	},
	{
		path: '*',
		component: PageNotFound,
		meta: {
			title: '404 Page Not Found'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	// eslint-disable-next-line no-undef
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title}`
	next()
})

export default router
