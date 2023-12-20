import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		searchTerm: '',
		searchResults: [],
		isSearchUsed: false,
	},
	getters: {
	},
	mutations: {
		updateSearchTerm (state, searchTerm) {
			state.searchTerm = searchTerm
			state.isSearchUsed = false
		},
		updateSearchResults (state, searchResults) {
			state.searchResults = searchResults
			state.isSearchUsed = true
		},
		isSearchUsed(state, payload) {
			state.isSearchUsed = payload
		},
	},
	actions: {
		async search ({ commit, state }) {
			await axios.get(`https://pokeapi.co/api/v2/pokemon/${state.searchTerm}`)
				.then(response => {
					if(this.state.searchTerm){
						commit('updateSearchResults', response.data)
					}
				})
				.catch(error => {
					if (error.response) {
						alert('Resultado não encontrado')
					}
				})
		}
	},
	modules: {
	}
})
