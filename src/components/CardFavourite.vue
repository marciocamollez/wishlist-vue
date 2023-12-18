<template>
  <div class="card">
    <div class="card__item" v-for="(item, index) in lista" :key="index">
      <img src="../assets/default.png" alt="Default Image" />
      <p>{{ item }}</p>
      <div class="card__item--close">
          <button @click="removerItem(index)" class="card__item--button">X</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			lista: []
		}
	},
	mounted() {
		const listaDoLocalStorage = localStorage.getItem('likedPokemons')
		if(listaDoLocalStorage){
			this.lista = JSON.parse(listaDoLocalStorage)
		}
	},
	methods: {
		removerItem(index){
			this.lista.splice(index, 1)
			localStorage.setItem('likedPokemons', JSON.stringify(this.lista))
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

    .card__item--close{
        position: absolute;
        top: 2px;
        right: 2px;
    }
    .card__item--button {
        background-color: transparent;
        cursor: pointer;
        color: #000;
        font-size: 1rem;
        border-radius: 50%;
        border: 2px solid #000;
        width: 30px;
        height: 30px;
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
