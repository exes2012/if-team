<template>
  <the-header>
    <the-header-bar />
  </the-header>
  <div class="bg-gray-100 w-full h-screen pt-[150px]">
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import TheHeader from "../components/Header/TheHeader.vue";
import TheHeaderBar from "../components/Header/TheHeaderBar.vue";

export default {
  name: "MainLayout",
  components: {
    TheHeader,
    TheHeaderBar,
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
