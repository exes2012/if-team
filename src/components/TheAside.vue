<template>
  <aside
    class="flex h-auto max-w-[392px] w-full pt-28 pr-5 pb-10 border-r-2 border-solid border-gray-100 lg:max-w-full lg:border-r-0 lg:border-t-2 lg:py-20 lg:px-0"
  >
    <p class="text-2 max-w-[230px] mb-10">
      {{ label }}
    </p>
    <div class="flex items-center">{{ description }}</div>
    <slot></slot>
  </aside>
</template>

<script>
export default {
  props: {
    label: String,
    description: String,
  },
};
</script>

<style scoped></style>
