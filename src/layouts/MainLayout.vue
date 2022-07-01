<template>
  <the-header>
    <the-header-bar />
  </the-header>
  <router-view />
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheHeaderBar from "../components/TheHeaderBar.vue";

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
