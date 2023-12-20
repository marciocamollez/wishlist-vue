<template>
  <div>
    <HeaderApp />
    <div class="container">
      <BreadCrumb />
      <div v-if="isSearchUsed">
          <SearchResult />
        </div>
        <div v-else>
          <h1>{{ $t('not_found') }}</h1>
            <p><RouterLink to="/">{{ $t('go_back') }}</RouterLink> </p>
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
