<template>
  <v-modal>
    <div class="flex flex-col w-[700px] h-[578px] mx-auto mt-36">
      <div class="w-full h-[408px] overflow-hidden rounded rounded-t-md">
        <cropper
            ref="photo"
            class="cropper"
            :src="imgSrc"
            :stencil-props="{
            aspectRatio: 12 / 12,
          }"
            stencil-component="circle-stencil"
        />
      </div>
      <div class="w-full h-[170px] bg-white flex flex-col rounded-b-md">
        <div class="flex items-center mx-auto mt-8">
          <v-button @click="rotate()">
            <v-icon name="previewRotate" width="28" height="24" class="mr-3"/>
          </v-button>
          <v-button @click="flip()">
            <v-icon name="previewMirror" width="30" height="30" class="ml-3"/>
          </v-button>
        </div>
        <div class="flex mx-auto mt-8">
          <v-button class="btn-primary w-[188px] h-[50px] mr-2.5"
                    @click="crop">Load
          </v-button>
          <v-button
              class="btn-secondary w-[188px] h-[50px] ml-2.5"
              @click="closeRegisterPhotoCrop"
          >Cancel
          </v-button>
        </div>
      </div>
    </div>
  </v-modal>
</template>

<script>
import "vue-advanced-cropper/dist/style.css"
import {Cropper} from "vue-advanced-cropper"
import VModal from "../UI/VModal.vue"

export default {
  components: {
    Cropper,
    VModal
  },
  data() {
    return {
      photo: null
    }
  },
  mounted() {
    this.photo = this.$refs.photo
  },
  computed: {
    imgSrc() {
      return this.$store.state.userAuth.photoForAvatar
    }
  },
  methods: {
    rotate() {
      this.photo.rotate(-90)
    },
    flip() {
      this.photo.flip(-1)
    },
    crop() {
      const {canvas} = this.photo.getResult()
      this.$store.commit('userAuth/SET_CROPPED_PHOTO', canvas)
      this.$store.commit("userAuth/SET_REGISTER_PHOTO_CROP_STATE", false);
    },
    closeRegisterPhotoCrop() {
      this.$store.commit("userAuth/SET_REGISTER_PHOTO_CROP_STATE", false);
    }
  }
}

</script>

<style>
.cropper {
  width: 700px;
  height: 508px;
}
</style>
