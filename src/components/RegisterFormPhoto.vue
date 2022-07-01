<template>
  <form
    method="post"
    class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100"
  >
    123
    <v-button
      class="btn-primary w-full h-15 mt-12"
      @click.prevent="sendRegistrationData"
      >Complete the registration</v-button
    >
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();

const sendRegistrationData = () => {
  store.commit("userAuth/SET_REGISTRATION_STEP", 4);
};
</script>

<style scoped></style>
