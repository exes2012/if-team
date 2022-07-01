<template>
  <h1 class="mb-5 md:mb-3">{{ props.companyName }}</h1>
  <p class="text-1">
    {{ props.linkLabel }}
    <router-link :to="props.link.url" class="link-1">{{
      props.link.label
    }}</router-link>
  </p>
</template>

<script setup>
const props = defineProps({
  companyName: String,
  linkLabel: String,
  link: Object,
});
</script>

<style scoped></style>
