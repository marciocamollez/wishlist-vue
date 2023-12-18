<template>
  <div class="card">
    <div class="card__item" v-for="(pokemon, i) in pokemons" :key="i">
      <img src="../assets/default.png" alt="Default Image" />
      <p>{{ pokemon.name }}</p>
      <div class="card__item--like">
        <button
          @click="toggleLike(pokemon)"
          class="card__item--button"
          >
            {{ isLiked(pokemon) ? '❤️' : '🤍' }}
          </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/apis/Api'

export default {
	data() {
		return {
			pokemons: [],
			likedPokemons: []
		}
	},
	mounted() {
		api.get().then(response => {
			this.pokemons = response.data.results
		})
		this.likedPokemons = JSON.parse(localStorage.getItem('likedPokemons')) || []
	},
	methods: {
		toggleLike(pokemon) {
			if (this.isLiked(pokemon)) {
				this.likedPokemons = this.likedPokemons.filter(p => p !== pokemon.name)
			} else {
				this.likedPokemons.push(pokemon.name)
			}
			localStorage.setItem('likedPokemons', JSON.stringify(this.likedPokemons))
		},
		isLiked(pokemon) {
			return this.likedPokemons.includes(pokemon.name)
		}
	}
}
</script>


<style scoped lang="scss">
@import "../scss/global";

.card{
  display: flex;
  flex-wrap: wrap;

  .card__item{
    border: 1px solid #ccc;
    width: 18%;
    padding: 1rem;
    box-sizing: border-box;
    margin-bottom: 1rem;
    margin-right: 1rem;
    position: relative;

    box-shadow: 8px 9px 8px -7px rgba(0,0,0,0.46);
    -webkit-box-shadow: 8px 9px 8px -7px rgba(0,0,0,0.46);
    -moz-box-shadow: 8px 9px 8px -7px rgba(0,0,0,0.46);

    p{
      margin-top: .5rem;
      text-align: center;
      text-transform: capitalize;
    }

    .card__item--like{
        position: absolute;
        top: 0;
        left: 5px;
        background: #000;
        clip-path: polygon(0 0, 100% 0, 100% 80%, 51% 100%, 49% 100%, 0 79%);
        padding: 0.5rem;
    }
    .card__item--button {
        background-color: transparent;
        border: 0px;
        cursor: pointer;
    }
  }
}

@media(max-width: 830px){
  .card{
    .card__item{
      width: 33%;
      margin-right: 0;
    }
  }

}

@media(max-width: 600px){
  .card{
    .card__item{
      width: 50%;
      margin-right: 0;
    }
  }

}

@media(max-width: 400px){
  .card{
    flex-direction: column;

    .card__item{
      width: 100%;
      margin-right: 0;
    }
  }

}

</style>
