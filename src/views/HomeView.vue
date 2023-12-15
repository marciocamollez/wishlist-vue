<template>
  <div class="home">
    <HeaderApp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderApp from '@/components/HeaderApp.vue'

export default {
	name: 'HomeView',
	components: {
		HeaderApp
	}
}
</script>
