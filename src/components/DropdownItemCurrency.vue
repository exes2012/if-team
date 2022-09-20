<template>
  <dropdown-item>
    <div class="flex items-center">
      <v-icon :name="icon" height="13" class="mr-2.5"/>
      <div class="text-gray-900">
        {{ value }}
      </div>
      <div class="text-gray-500" v-if="symbol">({{ symbol }})</div>
    </div>
  </dropdown-item>
</template>

<script>
import DropdownItem from "./DropdownItem.vue";

export default {
  components: {
    DropdownItem
  },
  props: {
    icon: String,
    value: String,
    symbol: String,
  }
}
</script>

<style scoped></style>
