<template>
  <li>
    <router-link :to="data.url" class="flex items-center">
      <v-icon :name="data.icon" />
      <div class="text-sm ml-3">{{ data.name }}</div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "LinkHeaderNavigation",
  components: {},

  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style scoped></style>
