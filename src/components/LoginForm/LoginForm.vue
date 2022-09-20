<template>
  <div
      class="max-w-[600px] w-full pt-[140px] px-[90px] pb-[90px] 2xl:max-w-[400px] 2xl:px-10 lg:max-w-[600px] md:px-[15px] md:pb-20"
  >
    <login-form-header
        company-name="If.Team"
        link-label="Войдите или"
        :link="link"
    />
    <form @submit.prevent="login()" method="post" class="mt-16">
      <div class="relative mb-2 md:mb-1">
        <!--        <v-input-->
        <!--            label="E-mail"-->
        <!--            placeholder="Your e-mail"-->
        <!--            v-model="email"-->
        <!--            @onBlur="v$.email.$touch"-->
        <!--            :class="{ 'field-error': v$.email.$error }"-->
        <!--        >-->
        <v-input
            label="E-mail"
            placeholder="Your e-mail"
            v-model="email.value"
            @input="removeError(email.errors)"
            :class="{ 'field-error': email.errors.length }"
        >
          <input-error v-if="email.errors.length" :errors="email.errors"/>
        </v-input>
        <v-input
            v-model="password.value"
            label="Password"
            placeholder="Enter your password"
            :icon="passwordFieldIcon"
            :type="passwordFieldType"
            @iconClick="showPassword()"
            @input="removeError(password.errors)"
            :class="{ 'field-error': password.errors.length }"
        >
          <input-error v-if="password.errors.length" :errors="password.errors"/>
          <router-link v-else to="/reset" class="link-2"
          >Забыли пароль?
          </router-link
          >
        </v-input>
      </div>
      <p v-if="false" class="text-3 mb-8 text-red-800 md:mb-6">Неверный логин и пароль</p>
      <v-button
          type="submit"
          class="btn-primary w-full h-15 mb-10 md:mb-7"
          :class="{'cursor-wait' : disabled}"
          :disabled="disabled"
      >Войти
      </v-button
      >
      <p class="text-3 text-center mb-10 md:mb-7">или войдите с помощью</p>
      <v-button class="btn-secondary w-full h-15">
        <v-icon name="google" class="mr-2"/>
        Google
      </v-button>
    </form>
  </div>
</template>

<script>
import InputError from "../InputError.vue"
import LoginFormHeader from "../AuthFormHeader.vue"
import {passwordHide} from "../../mixins/passwordHide";
import {removeErrors} from "../../mixins/removeErrors";
import router from "../../router"
// import {useVuelidate} from "@vuelidate/core"
// import { useValidationRules } from "../../composables/validationRules"
// import {email, helpers, required} from "@vuelidate/validators"

export default {
  components: {
    InputError,
    LoginFormHeader,
  },
  mixins: [
    passwordHide,
    removeErrors,
  ],
  data() {
    return {
      link: {
        label: "зарегистрируйтесь",
        url: "/register",
      },
      email: {
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

// const {passwordFieldIcon, passwordFieldType, showPassword} =
//     usePasswordShow();

  // const rules = {
  //   email: {
  //     required: helpers.withMessage("Поле не может быть пустым", required),
  //     email: helpers.withMessage("Неверный формат электронной почты", email),
  //   },
  //   password: {
  //     required: helpers.withMessage("Поле не может быть пустым", required),
  //   },
  // }

  // const v$ = useVuelidate(rules, state)
  //
  // const store = useStore()
  //
  methods: {
    login() {
      this.disabled = true
      this.$store.dispatch("userAuth/login", {
        email: this.email,
        password: this.password,
      })
          .then(() => {
            router.push({name: "TeamsListView"})
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
}
</script>
