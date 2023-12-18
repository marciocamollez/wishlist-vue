<template>
  <div>
    <HeaderApp />
    <div class="container">
      <BreadCrumb />
      <CardFavourite />
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import CardFavourite from '@/components/CardFavourite.vue'

export default {
	name: 'HomeView',
	components: {
		HeaderApp,
		BreadCrumb,
		CardFavourite
	}
}
</script>

<style scoped>

</style>
