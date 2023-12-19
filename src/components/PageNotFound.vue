<template>
  <div>
    <HeaderApp />
    <div class="container">
      <BreadCrumb />
      <h1>404 Page Not Found</h1>
      <p><RouterLink to="/">Click to go back</RouterLink> </p>
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
		BreadCrumb,
	}
}
</script>
