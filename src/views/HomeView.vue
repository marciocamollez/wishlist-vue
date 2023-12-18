<template>
  <div>
    <HeaderApp />
    <div class="container">
      <BreadCrumb />
      <CardItem />
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import CardItem from '@/components/CardItem.vue'

export default {
	name: 'HomeView',
	components: {
		HeaderApp,
		BreadCrumb,
		CardItem
	}
}
</script>
