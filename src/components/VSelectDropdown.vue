<template>
  <ul
    class="dropdown absolute"
    :class="{ left: left, right: right }"
    :style="{ width: width + 'px' }"
  >
    <slot />
  </ul>
</template>

<script>
export default {
  props: {
    width: String,
    left: Boolean,
    right: Boolean,
  },
};
</script>

<style scoped>
.dropdown {
  @apply absolute
	top-full
	z-20
	mt-[5px]
	py-[15px]
	bg-white
	rounded-md
	shadow-dropdown
  w-full
  flex
  flex-col;
}

.left {
  @apply left-0;
}

.right {
  @apply right-0;
}
</style>
