import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false

const i18n = new VueI18n({
	locale: 'pt-BR',
	messages: {
		'pt-BR': {
			city: 'Cidade: Sao Paulo',
			central_support: 'Central de Suporte',
			wishlist: 'Lista de desejos',
			search_txt: 'Resultados da Pesquisa',
			not_found: 'Página não encontrada',
			go_back: 'Clique para voltar',
			telephone: 'Telefone',
			email: 'Email',
		},
		'en-US': {
			city: 'City: Sao Paulo',
			central_support: 'Support Center',
			wishlist: 'Wishlist',
			search_txt: 'Search Results',
			not_found: 'Page not found',
			go_back: 'Click to return',
			telephone: 'Phone number',
			email: 'Email',
		}
	}
})

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app')
