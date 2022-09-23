<template>
  <div class="flex items-center cursor-pointer mb-8">
    <div
      class="flex justify-center items-center w-[445px] h-[130px] rounded-md bg-gray-100 hover:border hover:border-blue-400 transition"
    >
      <h1 class="text-gray-500">{{ teamName }}</h1>
    </div>
    <v-icon name="star" width="26" height="24" class="ml-6" />
  </div>
</template>

<script>
export default {
  name: "TeamsListItem",
  props: {
    teamName: String,
    teamLogo: String,
  },
};
</script>

<style scoped></style>
