<template>
  <svg
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    v-html="icon"
  ></svg>
</template>

<script>
import icons from "../../assets/icons/icons";

export default {
  props: {
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
  },
  computed: {
    icon() {
      return icons[this.name];
    },
  },
};

// const props = defineProps({
//   name: {
//     type: String,
//     default: "apply",
//   },
//   width: {
//     type: String,
//     default: "20",
//   },
//   height: {
//     type: String,
//     default: "20",
//   },
// });
//
// const icon = computed(() => {
//   return icons[props.name];
// });
</script>

<style></style>
