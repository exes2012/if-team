<template>
  <the-header></the-header>
  <v-main>
    <router-view />
  </v-main>
</template>

<script>
import TheHeader from "../components/Header/TheHeader.vue";
export default {
  name: "UnauthorizedLayout",
  components: {
    TheHeader,
  },
};
</script>

<style scoped></style>
