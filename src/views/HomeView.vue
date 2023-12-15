<template>
  <div>
    <HeaderApp />
    <div class="container">
      <BreadCrumb />
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'

export default {
	name: 'HomeView',
	components: {
		HeaderApp,
		BreadCrumb
	}
}
</script>
