<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{ active: active }"
    class="dropzone"
  >
    <input type="file" id="dropzone" class="hidden dropzone-file" />
    <label for="dropzone" class="text-3">Drag the file here</label>
  </div>
</template>

<script>
export default {
  name: "VDropzone",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.dropzone {
  @apply flex
    justify-center
    items-center
    cursor-pointer
    w-full
    h-14
    rounded-md
    border
    border-dashed
    border-gray-400
    transition
    hover:border-blue-400
    hover:bg-blue-100
    hover:text-blue-400;
}
.dropzone label {
  @apply w-full
  h-full
  flex
  justify-center
  items-center
  cursor-pointer
  text-gray-400
  hover:text-blue-400
  transition;
}

.dropzone.active {
  @apply border-blue-400
    bg-blue-100
    text-blue-400;
}
.dropzone.active label {
  @apply text-blue-400
  transition;
}
</style>
