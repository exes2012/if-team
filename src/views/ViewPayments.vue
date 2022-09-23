<template>
  <div class="bg-gray-100 w-full h-screen">
    <v-container class="flex-col">
      <v-card class="w-full h-96 mt-32 mb-10 p-8">
        <ul class="flex items-center flex-wrap gap-4 mb-4">
          <li
              class="w-fit flex items-center py-[5px] px-2.5 rounded-md bg-gray-100"
          >
            <div class="w-[26px] h-[26px] rounded-md overflow-hidden mr-2.5">
              <img
                  src="../assets/img/file-upload-demo.jpg"
                  alt="file icon"
                  class="w-full h-full object-cover"
              />
            </div>
            <p class="text-4 mr-2.5">Unnamed.png (2.33 Mb)</p>
            <v-button type="button"
            >
              <v-icon
                  name="close"
                  width="17"
                  height="17"
                  viewBox="0 0 20 20"
                  class="hover:fill-blue-400"
              ></v-icon>
            </v-button>
          </li>
        </ul>
        <v-dropzone @drop.prevent="drop" @change="selectedFile"></v-dropzone>
        <span>File: {{ dropzoneFile.name }}</span>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import VDropzone from "../components/VDropzone.vue";
import VCropper from "../components/Registration/RegisterFormPhotoCrop.vue";
import {ref} from "vue";

export default {
  name: "ViewPayments",
  components: {
    VDropzone,
  },
  setup() {
    let dropzoneFile = ref("");

    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };

    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzone-file").files[0];
    };

    return {dropzoneFile, drop, selectedFile};
  },
};
</script>

<style scoped></style>
