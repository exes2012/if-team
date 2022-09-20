<template>
  <li>
    <router-link :to="route.url" class="link" active-class="active">
      <p>{{ route.name }}</p>
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
  w-full
  items-center
  p-2.5
  rounded
  hover:bg-gray-100
  text-1
  transition;
}

.link.active {
  @apply bg-gray-100 text-blue-400
}
</style>
