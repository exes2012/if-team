<template>
  <div
    draggable="true"
    @dragstart.self="onDrag"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VDrag",
  props: {
    transferData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onDrag(e) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.setData("payload", JSON.stringify(this.transferData));
    },
  },
};
</script>

<style scoped></style>
