<template>
  <div
    class="w-[155px] h-[30px] bg-blue-100 rounded-md text-sm flex items-center p-2.5 mr-2.5"
  >
    <div class="w-[110px] text-ellipsis overflow-hidden">{{ email }}</div>
    <v-button>
      <v-icon name="close" class="fill-gray-500 ml-3 hover:fill-blue-500" />
    </v-button>
  </div>
</template>

<script>
export default {
  name: "InviteEmailItem",
  props: {
    email: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
