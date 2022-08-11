<template>
  <div
    class="w-12 h-12 rounded-full ml-10 bg-gray-100 flex justify-center items-center relative min-w-[48px]"
  >
    <v-icon name="notifications" width="20" height="20" />
    <div
      class="w-6 h-6 rounded-full absolute bg-red-800 flex justify-center items-center bottom-7 left-7"
    >
      <span class="text-small text-white">99+</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeaderNotifications",
};
</script>

<style scoped></style>