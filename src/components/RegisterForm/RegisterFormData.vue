<template>
  <form
      method="post"
      class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100"
  >
    <v-input
        label="E-mail"
        placeholder="Your e-mail"
        v-model="data.email.value"
        :class="{ 'field-error': data.email.errors.length }"
        @input="removeError(data.email.errors)"
    >
      <!--      <v-input-->
      <!--          label="E-mail"-->
      <!--          placeholder="Your e-mail"-->
      <!--          v-model="data.email"-->
      <!--          @onBlur="v$.email.$touch"-->
      <!--          :class="{ 'field-error': v$.email.$error }"-->
      <!--      >-->
      <input-error v-if="data.email.errors.length" :errors="data.email.errors"/>
    </v-input>
    <!--    <v-input-->
    <!--        label="Phone"-->
    <!--        placeholder="+38 000 00 00 000"-->
    <!--        v-model="data.phone"-->
    <!--        @onBlur="v$.phone.$touch"-->
    <!--        :class="{ 'field-error': v$.phone.$error }"-->
    <!--    >-->
    <v-input
        label="Phone"
        placeholder="+38 000 00 00 000"
        v-model="data.phone.value"
        :class="{ 'field-error': data.phone.errors.length }"
        @input="removeError(data.phone.errors)"
    >
      <input-error v-if="data.phone.errors.length" :errors="data.phone.errors"/>
    </v-input>
    <!--    <v-input-->
    <!--        label="Password"-->
    <!--        v-model="data.password"-->
    <!--        placeholder="******"-->
    <!--        :icon="passwordFieldIcon"-->
    <!--        :type="passwordFieldType"-->
    <!--        @iconClick="showPassword"-->
    <!--        @onBlur="v$.password.$touch"-->
    <!--        :class="{ 'field-error': v$.password.$error }"-->
    <!--    >-->
    <v-input
        label="Password"
        v-model="data.password.value"
        placeholder="******"
        :icon="passwordFieldIcon"
        :type="passwordFieldType"
        @iconClick="showPassword"
        :class="{ 'field-error': data.password.errors.length }"
        @input="removeError(data.password.errors)"
    >
      <input-error v-if="data.password.errors.length" :errors="data.password.errors"
      />
    </v-input>
    <!--    <v-button-->
    <!--        class="btn-primary w-full h-15 mt-12"-->
    <!--        @click.prevent="checkCredentials"-->
    <!--        :disable="v$.$invalid"-->
    <!--    >Next-->
    <!--    </v-button>-->
    <v-button
        class="btn-primary w-full h-15 mt-12"
        @click.prevent="checkCredentials"
        :class="{'cursor-wait' : data.disabled}"
        :disabled="data.disabled"
    >Next
    </v-button>
  </form>
</template>

<script setup>
import InputError from "../InputError.vue";
import {useValidationRules} from "../../composables/validationRules";
import {reactive} from "vue";
import {usePasswordShow} from "../../composables/passwordHide";
import {useVuelidate} from "@vuelidate/core";
import {useStore} from "vuex";

const data = reactive({
  email: {
    value: '',
    errors: []
  },
  phone: {
    value: '',
    errors: []
  },
  password: {
    value: '',
    errors: []
  },
  disabled: false
});

const {passwordFieldIcon, passwordFieldType, showPassword} =
    usePasswordShow();

const rules = useValidationRules();

const v$ = useVuelidate(rules, {
  email: data.email.value,
  phone: data.phone.value,
  password: data.password.value
});

const store = useStore();

const removeError = (array) => {
  array.length = 0
}

const setRegisterUserData = () => {
  store.commit("userAuth/SET_REGISTER_USER_DATA", {
    email: data.email.value,
    phone: data.phone.value,
    password: data.password.value
  });
}

const checkCredentials = () => {
  data.disabled = true
  setRegisterUserData()
  store.dispatch('userAuth/checkCredentials', {
    phone: store.state.userAuth.phone,
    email: store.state.userAuth.email,
    password: store.state.userAuth.password,
  })
      .then(res => {
        console.log(res)
      })
      .catch(err => {

        if (Object.keys(err).length) {
          for (const key in err) {
            if (data[key] && err[key].constraints && err[key].constraints.length) {
              data[key].errors = err[key].constraints
            }
          }
        }

      })
      .finally(() => {
        data.disabled = false
      })
};
</script>

<style scoped></style>
