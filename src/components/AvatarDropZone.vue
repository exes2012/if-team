<template>
  <div
      @dragenter.prevent="toggleActive"
      @dragleave.prevent="toggleActive"
      @dragover.prevent
      @drop.prevent="toggleActive"
      :class="{ active: active }"
      class="dropzone"
  >
    <input type="file" id="dropzone" class="dropzone-file" accept="image/*" @change="upload($event)"/>
    <v-icon
        name="cameraAvatar"
        width="41px"
        height="37px"
        v-if="croppedPhoto === null"
    />
    <img class="rounded-full" :src="croppedPhoto" alt="" v-else/>
  </div>
</template>

<script>

export default {
  name: "AvatarDropZone",
  data() {
    return {
      active: false,
      file: null
    }
  },
  computed: {
    croppedPhoto() {
      return this.$store.state.userAuth.photoForAvatarCropped
    }
  },
  methods: {
    toggleActive() {
      this.active = !this.active
    },
    upload(e) {
      if (e.target.files[0]) {
        this.file = e.target.files[0]
        this.$emit('upload', this.file)
      }
    }
  }
};
</script>

<style scoped>
.dropzone {
  @apply flex
  relative
  justify-center
  items-center
  cursor-pointer
  min-w-[166px]
  w-[166px]
  h-[166px]
  rounded-full
  border
  border-dashed
  border-gray-400
  transition
  hover:border-blue-400
  hover:bg-blue-100
  hover:text-blue-400
  fill-gray-200
  hover:fill-blue-400;
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

.dropzone-file {
  @apply w-full h-[100%] absolute opacity-0;
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
