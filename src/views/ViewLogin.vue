<template>
  <the-header v-if="screenSize === 'sm'"/>
  <main class="flex min-h-screen lg:h-auto lg:justify-center">
    <login-form/>
    <login-wallpapers/>
  </main>
</template>

<script>
import TheHeader from "../components/Header/TheHeader.vue";
import LoginForm from "../components/Login/LoginForm.vue";
import LoginWallpapers from "../components/Login/LoginWallpapers.vue";
import screenSizeMixin from "../mixins/screenSize";

export default {
  components: {
    TheHeader,
    LoginForm,
    LoginWallpapers,
  },
  mixins: [screenSizeMixin],
}
</script>

<style scoped></style>
