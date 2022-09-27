<template>
  <div
    class="avatar"
    :style="{
      width: avatarSize + 'px',
      height: avatarSize + 'px',
      minWidth: avatarSize + 'px',
    }"
  >
    <v-icon name="people" class="fill-white" :icon-scale="iconSize" />
  </div>
</template>

<script>
export default {
  name: "VAvatar",
  props: {
    avatarSize: {
      type: Number,
      default: 48,
    },
  },
  computed: {
    iconSize() {
      return this.avatarSize / 48;
    },
  },
};
</script>

<style scoped>
.avatar {
  @apply rounded-full bg-gray-500 flex justify-center items-center relative cursor-pointer overflow-hidden;
}
</style>
