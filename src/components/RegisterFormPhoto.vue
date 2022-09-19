<template>
  <form
    method="post"
    class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100"
  >
    <div class="flex">
      <avatar-drop-zone @drop.prevent="drop"/>
      <div class="flex flex-col justify-center ml-10">
        <div class="text-3 mb-2.5">Just a little bit left. Add a photo, and complete your registration</div>
        <div class="text-4 text-gray-400 mt-2.5">No more than 5 Mb</div>
        <div class="text-4 text-gray-400">(jpg, png, jpeg)</div>
      </div>
    </div>
    <v-button class="btn-primary w-full h-15 mt-12" @click.prevent="register"
      >Complete the registration</v-button
    >
  </form>
</template>

<script setup>
import {computed, ref} from "vue";
import { useStore } from "vuex";
import AvatarDropZone from "./AvatarDropZone.vue";

const store = useStore();

let dropzoneFile= ref('')

const drop =(e)=>{
  dropzoneFile.value= e.dataTransfer.files[0]
  setPhotoToCrop()
  openRegisterPhotoCrop()
}

const setPhotoToCrop=()=>{
  store.commit('userAuth/SET_REGISTER_PHOTO',dropzoneFile)
}

const openRegisterPhotoCrop = () => {
  store.commit("userAuth/SET_REGISTER_PHOTO_CROP_STATE", true);
};


const register = () => {
  const formData = new FormData()
  formData.append('phone',store.state.userAuth.phone)
  formData.append('email',store.state.userAuth.email)
  formData.append('password',store.state.userAuth.password)
  formData.append('full_name',store.state.userAuth.full_name)
  formData.append('date_of_birth',store.state.userAuth.date_of_birth)
  formData.append('avatar',store.state.userAuth.avatar)
  store.dispatch("userAuth/register", formData)
};
</script>

<style scoped></style>
