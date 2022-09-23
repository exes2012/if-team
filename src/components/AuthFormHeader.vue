<template>
  <h1 class="mb-5 md:mb-3">{{ companyName }}</h1>
  <p class="text-1">
    {{ linkLabel }}
    <router-link :to="link.url" class="link-1">{{ link.label }}
    </router-link>
  </p>
</template>

<script>
export default {
  name: 'AuthFormHeader',
  props: {
    companyName: String,
    linkLabel: String,
    link: Object,
  }
}
</script>

<style scoped></style>
