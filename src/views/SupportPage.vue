<template>
  <div>
    <HeaderApp />
    <div class="container">
      <BreadCrumb />
        <div v-if="isSearchUsed">
          <SearchResult />
        </div>
        <div v-else>
          <h1>{{ $t('central_support') }}</h1>
          <p>{{ $t('telephone') }}: (11) 4444-5555</p>
          <p>{{ $t('email') }}: contact@email.com</p>
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
