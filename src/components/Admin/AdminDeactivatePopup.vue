<template>
  <v-modal-card title="Deactivate an employee" width="700">
    <v-divider-horizontal class="mt-7" />
    <div
      class="flex mx-auto mt-10 mb-5 w-[200px] h-[200px] rounded-full overflow-hidden"
    >
      <img
        src="https://cs14.pikabu.ru/post_img/big/2022/05/05/3/1651716779170925137.jpg"
        alt=""
      />
    </div>
    <div class="text-1 mx-auto">{{ employeeName }}</div>
    <div class="text-3 text-gray-400 mx-auto mt-2.5">
      {{ employeePosition }}
    </div>
    <v-button class="btn-primary w-[188px] h-[50px] mx-auto mt-10"
      >Deactivate</v-button
    >
  </v-modal-card>
</template>

<script>
export default {
  name: "AdminDeactivatePopup",
  props: {
    employeeName: {
      type: String,
      required: true,
    },
    employeePosition: {
      type: String,
      default: "Нет должности",
    },
    employeePhoto: {
      type: String,
    },
  },
};
</script>

<style scoped></style>