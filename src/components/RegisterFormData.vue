<template>
  <form
    method="post"
    class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100"
  >
    <v-input
      label="E-mail"
      placeholder="Your e-mail"
      v-model="data.email"
      @onBlur="v$.email.$touch"
      :class="{ 'field-error': v$.email.$error }"
    >
      <input-error v-if="v$.email.$error" :errors="v$.email.$errors" />
    </v-input>
    <v-input
      label="Phone"
      placeholder="+38 000 00 00 000"
      v-model="data.phone"
      @onBlur="v$.phone.$touch"
      :class="{ 'field-error': v$.phone.$error }"
      ><input-error v-if="v$.phone.$error" :errors="v$.phone.$errors" />
    </v-input>
    <v-input
      label="Password"
      v-model="data.password"
      placeholder="******"
      :icon="passwordFieldIcon"
      :type="passwordFieldType"
      @iconClick="showPassword"
      @onBlur="v$.password.$touch"
      :class="{ 'field-error': v$.password.$error }"
      ><input-error v-if="v$.password.$error" :errors="v$.password.$errors"
    /></v-input>
    <v-button
      class="btn-primary w-full h-15 mt-12"
      :disabled="v$.$invalid"
      @click.prevent="sendRegistrationData"
      >Next</v-button
    >
  </form>
</template>

<script setup>
import InputError from "./InputError.vue";
import { useValidationRules } from "../composables/validationRules";
import { reactive } from "vue";
import { usePasswordShow } from "../composables/passwordHide";
import { useVuelidate } from "@vuelidate/core";
import { useStore } from "vuex";

const data = reactive({
  email: "",
  phone: "",
  password: "",
});

const { passwordFieldIcon, passwordFieldType, showPassword } =
  usePasswordShow();

const rules = useValidationRules();

const v$ = useVuelidate(rules, data);

const store = useStore();

const sendRegistrationData = () => {
  store.commit("userAuth/SET_REGISTER_USER_DATA", data);
  store.commit("userAuth/SET_REGISTER_STEP", 2);
};
</script>

<style scoped></style>
