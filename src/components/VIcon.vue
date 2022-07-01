<template>
  <svg
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    v-html="icon"
  ></svg>
</template>

<script setup>
import icons from "../assets/icons/icons";
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "apply",
  },
  width: {
    type: String,
    default: "20",
  },
  height: {
    type: String,
    default: "20",
  },
});

const icon = computed(() => {
  return icons[props.name];
});
</script>

<style></style>
