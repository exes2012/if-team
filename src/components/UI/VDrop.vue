<template>
  <div @drop.stop="onDrop" @dragover.prevent @dragenter.prevent>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VDrag",
  methods: {
    onDrop(e) {
      const transferData = JSON.parse(e.dataTransfer.getData("payload"));
      this.$emit("drop", transferData);
    },
  },
};
</script>

<style scoped></style>
