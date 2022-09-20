<template>
  <div class="relative w-full">
    <div
      class="h-12 rounded rounded-md flex items-center px-5 justify-between"
      :class="color"
    >
      <div class="text-2 text-gray-900">
        <div v-if="isSelected">{{ selected }}</div>
        <div v-else class="text-gray-400">{{ placeholder }}</div>
      </div>
      <v-button @click="changeState"><v-icon name="arrowDown" /></v-button>
    </div>
    <v-select-dropdown v-if="isActive">
      <dropdown-item
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        >{{ option.name }}</dropdown-item
      >
    </v-select-dropdown>
  </div>
</template>

<script>
import VSelectDropdown from "./VSelectDropdown.vue";
import DropdownItem from "./DropdownItem.vue";

export default {
  name: "VSelect",
  components: {
    VSelectDropdown,
    DropdownItem,
  },
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    options: {
      type: Array,
      default: [],
    },
    color: {
      type: String,
      default: "gray",
    },
    selected: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Choose an option",
    },
  },
  emits: ["select"],
  methods: {
    changeState() {
      this.isActive = !this.isActive;
    },
    hideSelect() {
      this.isActive = false;
    },
    selectOption(option) {
      this.$emit("select", option);
      this.selected = option.name;
      this.hideSelect();
    },
  },
  computed: {
    isSelected() {
      return this.selected != "";
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect, true);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style scoped>
.white {
  @apply bg-white;
}

.gray {
  @apply bg-gray-100;
}
</style>
