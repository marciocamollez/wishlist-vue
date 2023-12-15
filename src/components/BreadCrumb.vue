<template>
  <div class="breadcrumb">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink v-for="item in items" :key="item.path" :to="item.path">{{ item.name }}</RouterLink>
  </div>
</template>

<script>

export default {
	data() {
		return {
			items: []
		}
	},
	watch: {
		$route(){
			this.getRoute()
		}
	},
	methods: {
		getRoute(){
			this.items = this.$route.matched
		}
	},
	created(){
		this.getRoute()
	}
}
</script>

<style scoped lang="scss">
@import "../scss/global";
.breadcrumb{
  display: flex;
  width: 100%;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  a {
    text-decoration: none;

    &:after{
      content: ' / ';
      margin-left: .5rem;

    }

    &:last-child:after{
      content: '';
    }

  }
}


</style>
