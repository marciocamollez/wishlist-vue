<template>
  <div>
    <form v-on:submit.prevent="checkForm" class="search">
      <label for="search-bar">Barra de busca:</label>
      <input id="search-bar" type="text" placeholder="Digite o nome desejado e clique no botão ao lado" v-model="searchTerm" />
      <button
        @click="search"
        data-message="Botão de pesquisa"
      >
        <img src="../assets/search.svg" alt="Botão para pesquisar" />
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
	name: 'MenuSearch',
	data () {
		return {
			searchTerm: '',
		}
	},
	methods: {
		checkForm: function() {
			if(!this.searchTerm) {
				alert('A busca deve ser preenchida')
			}
		},
		...mapMutations(['updateSearchTerm']),
		...mapActions(['search']),
		onSearchTermChange () {
			this.updateSearchTerm(this.searchTerm)
		},

	},
	watch: {
		searchTerm () {
			this.onSearchTermChange()
		}
	}
}
</script>

<style scoped lang="scss">
@import "../scss/global";

.search{
    display: flex;
    justify-content: flex-end;
    position: relative;

    label{
      display: none;
    }

    img{
      position: absolute;
      z-index: 99;
      top: 15px;
      right: 15px;
    }

    input{
      display: flex;
      flex: 1;
      justify-content: flex-end;
      padding: 1rem;
      border: none;
    }

    button{
      background: #ccc;
      width: 50px;
      border: none;

      &:hover{
        background-color: $yellow;
        cursor: pointer;
      }
    }
}
@media screen and (max-width: 350px){
    .search input{
        width: 100%;
    }
}
</style>
