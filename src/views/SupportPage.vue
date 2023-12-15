<template>
  <div>
    <HeaderApp />
    <div class="container">
      <BreadCrumb />
      <h1>Support Area</h1>
      <p>Telephones: (11) 2123-2122</p>
      <p>Email: test@maganets.com</p>
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'

export default {
	name: 'SupportView',
	components: {
		HeaderApp,
		BreadCrumb
	}
}
</script>
