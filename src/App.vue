<template>
  <component :is="layout"></component>
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
    if (this.$store.state.language.siteLang !== this.$i18n.locale) {
      this.$i18n.locale = this.$store.state.language.siteLang
    }

    this.$store.dispatch('language/getLanguages')
  }
};
</script>

<style></style>
