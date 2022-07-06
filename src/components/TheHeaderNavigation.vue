<template>
  <ul class="flex">
    <link-header-navigation
      v-for="route in routes"
      :key="route.id"
      :data="route"
      class="mr-10 flex"
    >
    </link-header-navigation>
  </ul>
</template>

<script>
import LinkHeaderNavigation from "./LinkHeaderNavigation.vue";

export default {
  name: "TheHeaderNavigation",
  components: {
    LinkHeaderNavigation,
  },

  props: {
    routes: {
      type: Array,
    },
  },

  created() {
    console.log("NAV", this.routes);
  },
};
</script>

<style scoped></style>
