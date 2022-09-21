<template>
  <div
      @dragenter.prevent="toggleActive"
      @dragleave.prevent="toggleActive"
      @dragover.prevent
      @drop.prevent="toggleActive"
      :class="{ active: active }"
      class="dropzone"
  >
    <input type="file" id="dropzone" class="dropzone-file"/>
    <v-icon
        name="cameraAvatar"
        width="41px"
        height="37px"
        class="icon"
        :class="{ active: active }"
        v-if="croppedPhoto === null"
    />
    <img class="rounded-full" :src="croppedPhoto" alt="" v-else/>
  </div>
</template>

<script>
export default {
  name: "TeamAvatarDropZone",
  data() {
    return {
      active: false,
    };
  },
  components: {},
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
  },
  computed: {
    croppedPhoto() {
      return this.$store.state.userAuth.photoForAvatarCropped;
    },
  },
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
  w-[259px]
  h-[75px]
  rounded-lg
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

.dropzone-file {
  @apply w-full h-[100%] absolute opacity-0;
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
