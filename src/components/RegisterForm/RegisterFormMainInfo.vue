<template>
  <form
      method="post"
      class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100"
  >
    <v-input
        label="Full Name"
        placeholder="Enter your full name"
        v-model="data.full_name.value"
        :class="{ 'field-error': data.full_name.errors.length }"
    >
      <!--      <v-input-->
      <!--          label="Full Name"-->
      <!--          placeholder="Enter your full name"-->
      <!--          v-model="data.full_name"-->
      <!--          @onBlur="v$.email.$touch"-->
      <!--          :class="{ 'field-error': v$.email.$error }"-->
      <!--      >-->
      <!--        <input-error v-if="v$.email.$error" :errors="v$.email.$errors"/>-->
      <input-error v-if="data.full_name.errors.length" :errors="data.full_name.errors"/>
    </v-input>
    <v-datepicker label="Birthday" @selectDate="getDateOfBirth"/>

    <v-button
        class="btn-primary w-full h-15 mt-12"
        @click.prevent="setRegistrationData"
    >Next
    </v-button
    >
  </form>
</template>

<script setup>
import InputError from "../InputError.vue";
import VDatepicker from "../VDatepicker.vue";
import {useValidationRules} from "../../composables/validationRules";
import {reactive, ref} from "vue";
// import {usePasswordShow} from "../../composables/passwordHide";
import {useVuelidate} from "@vuelidate/core";
import {useStore} from "vuex";
import router from "../../router";

const data = reactive({
  full_name: {
    value: '',
    errors: []
  },
  date_of_birth: "",
});

// const {passwordFieldIcon, passwordFieldType, showPassword} =
// usePasswordShow();

const rules = useValidationRules();

const v$ = useVuelidate(rules, data);

const store = useStore();

const getDateOfBirth = (selectedDate) => {
  data.date_of_birth = selectedDate;
};

const setRegistrationData = () => {
  store.commit("userAuth/SET_REGISTER_USER_MAIN_INFO", data);
  store.commit("userAuth/SET_REGISTER_STEP", 3);
};
</script>
