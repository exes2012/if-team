<template>
  <svg
    :width="width"
    :height="height"
    fill="currentColor"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
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
      default: 18,
    },
    height: {
      type: Number,
      default: 18,
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