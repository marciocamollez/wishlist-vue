<template>
  <div class="card">
    <div class="card__item" v-for="pokemon in searchResults" :key="pokemon.id">
      <p>{{ pokemon.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['searchResults'])
	}
}
</script>



<style scoped lang="scss">
@import "../scss/global";


</style>
