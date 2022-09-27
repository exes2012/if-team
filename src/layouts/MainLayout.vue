<template>
  <the-header>
    <the-header-avatar class="ml-auto" />
  </the-header>
  <v-main>
    <router-view />
  </v-main>
</template>

<script>
import TheHeader from "../components/Header/TheHeader.vue";
import TheHeaderAvatar from "../components/Header/TheHeaderAvatarMain.vue";

export default {
  name: "MainLayout",
  components: {
    TheHeader,
    TheHeaderAvatar,
  },
};
</script>

<style>
.slide-fade-enter-from {
  transform: translateX(100px);
}

.slide-fade-enter-active,
.slide-fade-live-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-100px);
}
</style>
