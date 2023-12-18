<template>
  <header>
      <div class="container">
        <section class="flexheader">
          <div class="logo">
            <h1>
              <RouterLink to="/">MagaNets</RouterLink>
            </h1>
          </div>

          <nav class="menu">
            <MenuLinks />
            <MenuSearch />
          </nav>
        </section>
      </div>
    </header>
</template>

<script>
import MenuSearch from './MenuSearch.vue'
import MenuLinks from './MenuLinks.vue'

export default {
	name: 'HelloWorld',
	components: {
		MenuSearch,
		MenuLinks
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/global";
header{
    width: 100%;
    display: flex;
    background-color: $purple;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: #FFF;
}
.flexheader{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}
.menu{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 2;
}
.logo{
    flex: 1;

    h1{
      font-size: 2rem;

      a{
        color: #FFF;
        text-decoration: none;

        &:hover{
          color: #fff200;
        }
      }
    }
}
@media screen and (max-width: 767px){
    .flexheader{
        flex-direction: column;
    }
}
</style>
