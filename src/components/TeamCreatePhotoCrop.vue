<template>
  <v-modal>
    <div class="flex flex-col w-[700px] h-[578px] mx-auto mt-36">
      <div class="w-full h-[408px] overflow-hidden rounded rounded-t-md">
        <cropper
          ref="photo"
          class="cropper"
          :src="imgSrc"
          :stencil-props="{
            aspectRatio: 42 / 12,
          }"
        />
      </div>
      <div class="w-full h-[170px] bg-white flex flex-col rounded-b-md">
        <div class="flex items-center mx-auto mt-8">
          <v-button>
            <v-icon name="previewRotate" width="28" height="24" class="mr-3" />
          </v-button>
          <v-button>
            <v-icon name="previewMirror" width="30" height="30" class="ml-3" />
          </v-button>
        </div>
        <div class="flex mx-auto mt-8">
          <v-button class="btn-primary w-[188px] h-[50px] mr-2.5" @click="crop"
            >Load
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
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import VModal from "./UI/VModal.vue";

export default {
  name: "TeamCreatePhotoCrop",
  components: {
    VModal,
  },
  data() {
    return {
      photo: null,
      imgSrc: this.$store.state.teams.photoForLogo,
    };
  },
  methods: {
    crop() {
      const { canvas } = this.photo.getResult();
      this.$store.commit("teams/SET_CROPPED_PHOTO", canvas);
      this.$store.commit("teams/SET_TEAM_PHOTO_CROP_STATE", false);
    },
    closeRegisterPhotoCrop() {
      this.$store.commit("teams/SET_TEAM_PHOTO_CROP_STATE", false);
    },
  },
};

// const store = useStore();
//
// let imgSrc = store.state.teams.photoForLogo;

// const photo = ref(null);
//
// const crop = () => {
//   const { canvas } = photo.value.getResult();
//   store.commit("teams/SET_CROPPED_PHOTO", canvas);
//
//   store.commit("teams/SET_TEAM_PHOTO_CROP_STATE", false);
// };
//
// const closeRegisterPhotoCrop = () => {
//   store.commit("teams/SET_TEAM_PHOTO_CROP_STATE", false);
// };
</script>

<style>
.cropper {
  width: 700px;
  height: 508px;
}
</style>
