<template>
  <form
      method="post"
      class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100"
  >
    <v-input
        label="E-mail"
        placeholder="Your e-mail"
        v-model="email.value"
        :class="{ 'field-error': email.errors.length }"
        @input="removeErrors(email.errors)"
    >
      <!--      <v-input-->
      <!--          label="E-mail"-->
      <!--          placeholder="Your e-mail"-->
      <!--          v-model="data.email"-->
      <!--          @onBlur="v$.email.$touch"-->
      <!--          :class="{ 'field-error': v$.email.$error }"-->
      <!--      >-->
      <input-error v-if="email.errors.length" :errors="email.errors"/>
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
        v-model="phone.value"
        :class="{ 'field-error': phone.errors.length }"
        @input="removeErrors(phone.errors)"
    >
      <input-error v-if="phone.errors.length" :errors="phone.errors"/>
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
        v-model="password.value"
        placeholder="******"
        :icon="passwordFieldIcon"
        :type="passwordFieldType"
        @iconClick="showPassword()"
        :class="{ 'field-error': password.errors.length }"
        @input="removeErrors(password.errors)"
    >
      <input-error v-if="password.errors.length" :errors="password.errors"/>
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
        :class="{'cursor-wait' : disabled}"
        :disabled="disabled"
    >Next
    </v-button>
  </form>
</template>

<script>
import InputError from "../InputError.vue"
import {passwordHide} from "../../mixins/passwordHide"
// import {useValidationRules} from "../../composables/validationRules"
// import {useVuelidate} from "@vuelidate/core"

export default {
  components: {
    InputError,
  },
  mixins: [
    passwordHide,
  ],
  data() {
    return {
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
    }
  },

  methods: {
    setRegisterUserData() {
      this.$store.commit("userAuth/SET_REGISTER_USER_DATA", {
        email: this.email.value,
        phone: this.phone.value,
        password: this.password.value
      })
    },
    checkCredentials() {
      this.disabled = true
      this.setRegisterUserData()
      this.$store.dispatch('userAuth/checkCredentials', {
        phone: this.$store.state.userAuth.phone,
        email: this.$store.state.userAuth.email,
        password: this.$store.state.userAuth.password,
      })
          .then(res => {
            console.log(res)
          })
          .catch(err => {

            if (Object.keys(err).length) {
              for (const key in err) {
                if (this[key] && err[key].constraints && err[key].constraints.length) {
                  this[key].errors = err[key].constraints
                }
              }
            }

          })
          .finally(() => {
            this.disabled = false
          })
    }
  }

//   const rules = useValidationRules();
//
//   const v$ = useVuelidate(rules, {
//     email: data.email.value,
//     phone: data.phone.value,
//     password: data.password.value
//   });
}
</script>

<style scoped></style>
