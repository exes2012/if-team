<template>
  <li class="list-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "DropdownItem",
};
</script>

<style scoped>
.list-item {
  @apply pt-[13px]
	pb-3.5
	px-5
	cursor-pointer
	hover:bg-gray-100
	transition;
}

.list-item:hover div {
  @apply text-blue-400;
}
</style>
