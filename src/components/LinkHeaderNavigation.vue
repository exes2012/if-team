<template>
  <li>
    <router-link :to="route.url" class="link" active-class="active">
      <v-icon
        :name="route.icon"
        :icon-scale="route.iconScale"
        class="fill-gray-500 mr-2.5"
      />
      <p class="text-3">{{ route.name }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "LinkHeaderNavigation",

  props: {
    route: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.link {
  @apply flex
  items-center
  p-2.5
  rounded
  [&:hover>svg]:fill-blue-400
  hover:bg-gray-100
  transition;
}

.link.active {
  @apply bg-gray-100
  [&>svg]:fill-blue-400;
}
</style>
