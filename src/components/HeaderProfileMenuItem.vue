<template>
  <li class="list-item">
    <v-icon name="profile" class="fill-gray-500" />
    <span class="list-text">Profile</span>
  </li>
</template>

<script>
export default {
  name: "DropdownItem",
  props: {
    iconHeight: {
      type: String,
    },
    iconWidth: {
      type: String,
    },
  },
};
</script>

<style scoped>
.list-item {
  @apply pt-[13px]
	pb-3.5
	px-5
	cursor-pointer
	hover:bg-gray-100
	transition
  flex;
}

.list-item:hover div {
  @apply text-blue-400;
}
</style>
