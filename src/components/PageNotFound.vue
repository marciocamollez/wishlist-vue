<template>
  <div>
    <HeaderApp />
    <div class="container">
      <BreadCrumb />
      <div v-if="isSearchUsed">
          <SearchResult />
        </div>
        <div v-else>
          <h1>404 Page Not Found</h1>
            <p><RouterLink to="/">Click to go back</RouterLink> </p>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
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
		SearchResult
	}
}
</script>
