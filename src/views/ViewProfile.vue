<template>
  <the-aside>
    <ul class="flex flex-col">
      <link-aside-navigation
        v-for="route in routes"
        :key="route.id"
        :route="route"
        class="mr-5 flex"
      />
    </ul>
  </the-aside>
  <the-main>
    <router-view />
  </the-main>
</template>

<script setup>
import TheAside from "../components/TheAside.vue";
import LinkAsideNavigation from "../components/LinkAsideNavigation.vue";

const routes = [
  { name: "My data", url: "/profile/" },
  { name: "Teams", url: "/profile/teams" },
];
</script>

<style scoped></style>
