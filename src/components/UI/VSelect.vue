<template>
  <div class="flex flex-col">
    <div class="label mb-2.5">{{ label }}</div>
    <div class="relative w-full">
      <div
          class="h-12 rounded rounded-md flex items-center px-5 justify-between"
          :class="color"
      >
        <div class="text-2 text-gray-900">
          <div v-if="isSelected">{{ selected }}</div>
          <div v-else class="text-gray-400">{{ placeholder }}</div>
        </div>
        <v-button @click="changeState">
          <v-icon name="arrowDown"/>
        </v-button>
      </div>
      <v-select-dropdown v-if="isActive">
        <dropdown-item
            v-for="(option, i) in options"
            :key="i"
            @click="selectOption(option)"
        >{{ option.name }}
        </dropdown-item
        >
      </v-select-dropdown>
    </div>
  </div>
</template>

<script>
import VSelectDropdown from "./VSelectDropdown.vue";
import DropdownItem from "../DropdownItem.vue";
import changeSelectComponentStateMixin from "../../mixins/changeSelectComponentStateMixin";

export default {
  name: "VSelect",
  components: {
    VSelectDropdown,
    DropdownItem,
  },
  props: {
    label: {
      type: String,
    },
  },
  mixins: [changeSelectComponentStateMixin],
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
