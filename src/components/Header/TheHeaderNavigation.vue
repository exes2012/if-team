<template>
  <ul class="flex">
    <link-header-navigation
      v-for="route in routes"
      :key="route.id"
      :route="route"
      class="mr-5 flex"
    >
    </link-header-navigation>
  </ul>
</template>

<script>
import LinkHeaderNavigation from "../LinkHeaderNavigation.vue";

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
};
</script>

<style scoped></style>
