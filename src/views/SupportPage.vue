<template>
  <div>
    <HeaderApp />
    <div class="container">
      <BreadCrumb />
        <div v-if="isSearchUsed">
          <SearchResult />
        </div>
        <div v-else>
          <h1>Support Area</h1>
          <p>Telephones: (11) 2123-2122</p>
          <p>Email: test@maganets.com</p>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import SearchResult from '@/components/SearchResult.vue'

export default {
	name: 'SupportView',
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
