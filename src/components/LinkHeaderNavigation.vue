<template>
  <li>
    <router-link
      :to="route.url"
      class="link"
      :class="{ active: isActive }"
      @click="addActiveClass"
    >
      <v-icon
        :name="route.icon"
        viewBox="0 0 20 20"
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

  data: () => ({
    isActive: false,
  }),

  methods: {
    addActiveClass() {
      this.isActive = true;
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
