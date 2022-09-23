<template>
  <the-header v-if="screenSize === 'sm'" />
  <main class="flex min-h-screen lg:h-auto lg:justify-center">
    <login-form />
    <login-wallpapers />
  </main>
</template>

<script setup>
import TheHeader from "../components/Header/TheHeader.vue";
import LoginForm from "../components/LoginForm/LoginForm.vue";
import LoginWallpapers from "../components/LoginForm/LoginWallpapers.vue";
import { useScreenSize } from "../composables/screenSize";

const screenSize = useScreenSize();
</script>

<style scoped></style>
