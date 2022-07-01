<template>
  <form
    method="post"
    class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100"
  >
    <v-input
      label="Full Name"
      placeholder="Enter your full name"
      v-model="state.fullName"
      @onBlur="v$.email.$touch"
      :class="{ 'field-error': v$.email.$error }"
    >
      <input-error v-if="v$.email.$error" :errors="v$.email.$errors" />
    </v-input>
    <v-datepicker label="Birthday" />

    <v-button
      class="btn-primary w-full h-15 mt-12"
      @click.prevent="sendRegistrationData"
      >Next</v-button
    >
  </form>
</template>

<script setup>
import InputError from "./InputError.vue";
import VDatepicker from "./VDatepicker.vue";
import { useValidationRules } from "../composables/validationRules";
import { reactive, ref } from "vue";
import { usePasswordShow } from "../composables/passwordHide";
import { useVuelidate } from "@vuelidate/core";
import { useStore } from "vuex";

const state = reactive({
  fullName: "",
  phone: "",
  password: "",
});

const { passwordFieldIcon, passwordFieldType, showPassword } =
  usePasswordShow();

const rules = useValidationRules();

const v$ = useVuelidate(rules, state);

const store = useStore();

const sendRegistrationData = () => {
  store.commit("userAuth/SET_REGISTRATION_STEP", 3);
};
</script>
