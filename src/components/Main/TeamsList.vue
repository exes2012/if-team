<template>
  <div class="text-1">Your available teams:</div>
  <ul class="flex flex-col overflow-y-auto w-[540px] h-[400px] mt-8 mb-8">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "TeamsList",
};
</script>

<style scoped></style>
