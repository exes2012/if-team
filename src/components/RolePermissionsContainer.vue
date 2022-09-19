<template>
  <div class="w-full flex flex-col bg-white my-5 p-10 rounded rounded-xl">
    <div class="flex justify-between">
      <span class="text-1">Проекты</span>
      <v-button class="w-7 h-7 rounded-full hover:bg-gray-200">
        <v-icon name="arrowDown" />
      </v-button>
    </div>
    <div class="text-3 text-gray-400 mt-1">
      Видимость проектов, создание новых проектов, редактирование проектов,
      делегировать проект.
    </div>
    <div class="flex flex-col">
      <v-divider-horizontal class="mt-7" />
      <div class="flex">
        <div class="flex w-[435px]">
          <v-select />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RolePermissionsContainer",
  components: {},
};
</script>

<style scoped></style>
