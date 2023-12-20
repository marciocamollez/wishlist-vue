<template>
  <div class="card">
    <h1>{{ $t('search_txt') }}</h1>
    <div class="card__item">
      <div v-for="pokemon in searchResults" :key="pokemon.name">
        <div><h2>{{ pokemon.name }} </h2></div>
      </div>
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

h2{
  text-transform: capitalize;
  color: $purple;
}
</style>
