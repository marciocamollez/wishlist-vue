<template>
  <div>
    <HeaderApp />
    <div class="container">
      <BreadCrumb />
        <div v-if="isSearchUsed">
          <SearchResult />
        </div>
        <div v-else>
          <CardFavourite />
        </div>
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import CardFavourite from '@/components/CardFavourite.vue'
import SearchResult from '@/components/SearchResult.vue'

export default {
	name: 'HomeView',
	computed: {
		isSearchUsed() {
			return this.$store.state.isSearchUsed
		},
	},
	components: {
		HeaderApp,
		BreadCrumb,
		CardFavourite,
		SearchResult
	}
}
</script>

<style scoped>

</style>
