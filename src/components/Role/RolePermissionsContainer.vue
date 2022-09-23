<template>
  <div class="w-3/4 flex flex-col bg-white mt-5 p-10 rounded rounded-xl">
    <div class="flex justify-between">
      <span class="text-1">{{ permissionBlockName }}</span>
      <v-button class="w-7 h-7 rounded-full hover:bg-gray-200" @click="toggle">
        <v-icon name="arrowDown" />
      </v-button>
    </div>
    <div class="text-3 text-gray-400 mt-1 flex max-w-[1000px]" v-if="!isOpen">
      {{ permissionBlockDescription }}
    </div>
    <div class="flex flex-col" v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VToggle from "../VToggle.vue";
export default {
  name: "RolePermissionsContainer",
  components: {
    VToggle,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    permissionBlockName: {
      type: String,
      default: "Блок",
    },
    permissionBlockDescription: {
      type: String,
      default: "Описание блока с пермиссиями",
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped></style>
