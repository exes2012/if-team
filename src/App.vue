<template>
  <component :is="layout" class="h-screen"></component>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
import TeamLayout from "./layouts/TeamLayout.vue";
import UnauthorizedLayout from "./layouts/UnauthorizedLayout.vue";


export default {
  components: {
    EmptyLayout,
    MainLayout,
    TeamLayout,
    UnauthorizedLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  beforeCreate() {
    if (localStorage.getItem('lang')) {
      if (this.$i18n.locale !== localStorage.getItem('lang')) {
        this.$i18n.locale = localStorage.getItem('lang')
      }
    } else {
      localStorage.setItem('lang', this.$i18n.locale)
    }
  }
};
</script>

<style></style>
