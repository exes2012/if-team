<template>
  <form
    method="post"
    class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100"
  >
    <div @click="openRegisterPhotoCrop">123</div>
    <v-button class="btn-primary w-full h-15 mt-12" @click.prevent="register"
      >Complete the registration</v-button
    >
  </form>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const openRegisterPhotoCrop = () => {
  store.commit("userAuth/SET_REGISTER_PHOTO_CROP_STATE", true);
};

const register = () => {
  store.dispatch("userAuth/register", {
    phone: store.state.userAuth.phone,
    email: store.state.userAuth.email,
    password: store.state.userAuth.password,
    full_name: store.state.userAuth.full_name,
    date_of_birth: store.state.userAuth.date_of_birth,
    avatar: store.state.userAuth.avatar,
  });
};
</script>

<style scoped></style>
