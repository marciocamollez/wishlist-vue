<template>
  <ul class="menu-links">
    <li>
      <img src="../assets/pin.svg" alt="Icone de localização" /> {{ $t('city') }}
    </li>
    <li>
      <img src="../assets/phone.svg" alt="Icone de telefone" /> <RouterLink to="/support"> {{ $t('central_support') }}</RouterLink>
    </li>
    <li>
      <img src="../assets/heart.svg" alt="Icone de lista de desejos" />
      <RouterLink to="/wishlist">{{ $t('wishlist') }}</RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
	name: 'MenuLinks',
}
</script>

<style scoped lang="scss">
@import "../scss/global";

.menu-links{
    display: flex;
    width: 100%;
    justify-content:space-between;
    gap: 1rem;

    padding: 0;
    margin: 0;
    list-style: none;

    a{
      color: #FFFFFF;
      text-decoration: none;

      &:hover{
        color: $yellow;
      }
    }

    li{
      display: flex;
      align-items: center;

      img{
          height: 20px;
          margin-right: 0.5rem;
      }
    }
}
@media screen and (max-width: 350px){
    .menu-links{
        flex-direction: column;
    }
}
</style>
