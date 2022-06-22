<template>
  <svg
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
    fill="none"
  ></svg>
</template>

<script>
import icons from "../assets/icons/icons";
export default {
  name: "VIcon",
  props: {
    name: {
      type: String,
      default: "apply",
    },
    width: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      path: icons[this.name],
    };
  },
};
</script>

<style></style>
