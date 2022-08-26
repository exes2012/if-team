<template>
  <div class="relative ml-10">
    <v-button
      class="btn-primary h-12 w-32 outline-none"
      type="button"
      @click="changeState"
      @keyup.esc="hideSelect"
      >+ Add
    </v-button>
    <v-select-dropdown width="166" v-if="isActive">
      <dropdown-item>Add project</dropdown-item>
      <dropdown-item>Add task</dropdown-item>
    </v-select-dropdown>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import VSelectDropdown from "./VSelectDropdown.vue";
import DropdownItem from "./DropdownItem.vue";

const emit = defineEmits(["select"]);

const isActive = ref(false);

const changeState = () => {
  isActive.value = !isActive.value;
};

const hideSelect = () => {
  isActive.value = false;
};

onMounted(() => {
  document.addEventListener("click", hideSelect, true);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", hideSelect);
});
</script>

<style scoped></style>
