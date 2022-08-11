<template>
  <div
    class="max-w-[600px] w-full pt-[140px] px-[90px] pb-[90px] 2xl:max-w-[400px] 2xl:px-10 lg:max-w-[600px] md:px-[15px] md:pb-20"
  >
    <login-form-header
      company-name="If.Team"
      link-label="Войдите или"
      :link="link"
    />
    <form @submit.prevent="login" method="post" class="mt-16">
      <div class="relative mb-2 md:mb-1">
        <v-input
          label="E-mail"
          placeholder="Your e-mail"
          v-model="state.email"
          @onBlur="v$.email.$touch"
          :class="{ 'field-error': v$.email.$error }"
        >
          <input-error v-if="v$.email.$error" :errors="v$.email.$errors" />
        </v-input>
        <v-input
          v-model="state.password"
          label="Password"
          placeholder="Enter your password"
          :icon="passwordFieldIcon"
          :type="passwordFieldType"
          @iconClick="showPassword"
          @onBlur="v$.password.$touch"
          :class="{ 'field-error': v$.password.$error }"
        >
          <input-error
            v-if="v$.password.$error"
            :errors="v$.password.$errors"
          />
          <router-link v-else to="/reset" class="link-2"
            >Забыли пароль?</router-link
          >
        </v-input>
      </div>
      <p class="text-3 mb-8 text-red-800 md:mb-6">Неверный логин и пароль</p>
      <v-button
          type="submit"
        class="btn-primary w-full h-15 mb-10 md:mb-7"
        :disabled="v$.$invalid"
        >Войти</v-button
      >
      <p class="text-3 text-center mb-10 md:mb-7">или войдите с помощью</p>
      <v-button class="btn-secondary w-full h-15">
        <v-icon name="google" class="mr-2" />Google
      </v-button>
    </form>
  </div>
</template>

<script setup>
import InputError from "../components/InputError.vue";
import LoginFormHeader from "./AuthFormHeader.vue";
import { reactive } from "vue";
import { usePasswordShow } from "../composables/passwordHide";
import { useVuelidate } from "@vuelidate/core";
import { useStore } from "vuex";
import router from "../router";
import { useValidationRules } from "../composables/validationRules";
import {email, helpers, required} from "@vuelidate/validators";

const link = reactive({
  label: "зарегистрируйтесь",
  url: "/register",
});

const state = reactive({
  email: "",
  password: "",
});

const { passwordFieldIcon, passwordFieldType, showPassword } =
  usePasswordShow();

const rules = {
  email: {
    required: helpers.withMessage("Поле не может быть пустым", required),
    email: helpers.withMessage("Неверный формат электронной почты", email),
  },
  password: {
    required: helpers.withMessage("Поле не может быть пустым", required),
  },
};

const v$ = useVuelidate(rules, state);

const store = useStore();

const login = () => {
  console.log('submitted')
  store.dispatch("userAuth/register", { state }).then(() => {
    router.push({ name: "projects" });
  });
};
</script>
