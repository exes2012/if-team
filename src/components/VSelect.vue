<template>
  <div class="relative w-full">
    <div
      class="h-12 bg-gray-100 rounded rounded-md flex items-center px-5 justify-between"
    >
      <div>{{ selected }}</div>
      <v-button @click="changeState"><v-icon name="arrowDown" /></v-button>
    </div>
    <v-select-dropdown v-if="isActive"> </v-select-dropdown>
  </div>
</template>

<script setup>
import VSelectDropdown from "./VSelectDropdown.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";

const emit = defineEmits(["select"]);

const isActive = ref(false);

const changeState = () => {
  isActive.value = !isActive.value;
};

const hideSelect = () => {
  isActive.value = false;
};

const selected = ref("USD");

const selectOption = (option) => {
  emit("select", option);
  selected.value = option.value;
  hideSelect();
};

onMounted(() => {
  document.addEventListener("click", hideSelect, true);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", hideSelect);
});
</script>

<style scoped></style>
