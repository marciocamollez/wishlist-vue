<template>
  <div class="search">
    <img src="../assets/search.svg" />
    <input type="text" placeholder="Busca" />
  </div>
</template>

<script>
export default {
	name: 'MenuSearch',
}
</script>

<style scoped lang="scss">
@import "../scss/global";

.search{
    display: flex;
    justify-content: flex-end;
    position: relative;

    img{
      position: absolute;
      z-index: 99;
      top: 15px;
      left: 10px;
    }

    input{
      display: flex;
      flex: 1;
      justify-content: flex-end;
      padding: 1rem 1rem 1rem 3rem;
      border: none;
    }
}
@media screen and (max-width: 350px){
    .search input{
        width: 100%;
    }
}
</style>
