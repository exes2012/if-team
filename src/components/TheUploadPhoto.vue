<template>
  <div class="relative w-full">
    <input type="file" name="file" id="file" required />
    <label for="file" class="label" :class="shape">
      <img class="w-full h-full object-cover" alt="" />
      <v-icon name="camera" viewBox="0 0 20 20" class="icon-camera"></v-icon>
    </label>
    <v-button type="button">
      <v-icon
        name="close"
        width="14"
        height="14"
        viewBox="0 0 20 20"
        class="fill-gray-900"
      ></v-icon>
    </v-button>
  </div>
</template>

<script>
export default {
  name: "TheUploadPhoto",
  props: {
    shape: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
input {
  @apply invisible
	opacity-0
	absolute;
}

.label {
  @apply relative
    overflow-hidden
    w-[166px]
    h-[166px]
    flex
    justify-center
    items-center
    bg-gray-100
    rounded-full
    cursor-pointer
    border
    border-dashed
    border-gray-400
    hover:border-blue-400
    transition
		[&:hover>svg]:fill-blue-400
		[&:hover+button]:opacity-100;
}

.label.rectangle {
  @apply w-full
  h-full
  rounded-lg;
}

.icon-camera {
  @apply fill-gray-200
    w-12
    h-12
		absolute
    top-1/2
    -translate-y-1/2
    left-1/2
    -translate-x-1/2
    z-10
    transition;
}

.label.rectangle .icon-camera {
  @apply w-7
    h-7;
}

button {
  @apply absolute
    -bottom-[10px]
    left-[73px]
    z-10
    w-5
    h-5
    bg-gray-100
    rounded-full
		opacity-0
		hover:opacity-100
    transition;
}

.label.rectangle + button {
  @apply hidden;
}

img {
  @apply hidden;
}

img[src] {
  @apply block;
}
</style>
