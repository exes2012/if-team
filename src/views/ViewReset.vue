<template>
  <the-aside label="Здесь может быть важная информация">
  </the-aside>
  <the-main>
    <h1>Восстановление пароля</h1>
    <router-view />
  </the-main>
</template>

<script>
import TheAside from "../components/TheAside.vue";
export default {
  name: "ViewReset",
  components:{
    TheAside
  }
};
</script>

<style scoped></style>
