<template>
  <v-modal>
    <div class="flex flex-col w-[700px] h-[578px] mx-auto mt-36">
      <div class="w-full h-[408px] overflow-hidden rounded rounded-t-md">
        <cropper
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
          <v-button>
            <v-icon name="previewRotate" width="28" height="24" class="mr-3" />
          </v-button>
          <v-button
            ><v-icon name="previewMirror" width="30" height="30" class="ml-3"
          /></v-button>
        </div>
        <div class="flex mx-auto mt-8">
          <v-button class="btn-primary w-[188px] h-[50px] mr-2.5"
            >Load</v-button
          >
          <v-button
            class="btn-secondary w-[188px] h-[50px] ml-2.5"
            @click="closeRegisterPhotoCrop"
            >Cancel</v-button
          >
        </div>
      </div>
    </div>
  </v-modal>
</template>

<script setup>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import VModal from "./VModal.vue";
import { useStore } from "vuex";

const store = useStore();

let imgSrc =
  "https://images.unian.net/photos/2019_01/thumb_files/400_0_1548156537-8984.jpg?0.8727469299603938";

const closeRegisterPhotoCrop = () => {
  store.commit("userAuth/SET_REGISTER_PHOTO_CROP_STATE", false);
};
</script>

<style>
.cropper {
  width: 700px;
  height: 508px;
}
</style>
