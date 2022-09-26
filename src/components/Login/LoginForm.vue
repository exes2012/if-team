<template>
  <div
      class="max-w-[600px] w-full pt-[140px] px-[90px] pb-[90px] 2xl:max-w-[400px] 2xl:px-10 lg:max-w-[600px] md:px-[15px] md:pb-20"
  >
    <login-form-header
        company-name="If.Team"
        :link-label="$t('login.login')"
        :link="
        {
        label: $t('login.register'),
        url: '/register',
        }"
    />
    <form @submit.prevent="login()" method="post" class="mt-16">
      <div class="relative mb-2 md:mb-1">
        <v-input
            label="E-mail"
            placeholder="Your e-mail"
            v-model="email.value"
            :class="{ 'field-error': emailErrors && emailErrors.length }"
            @input="removeErrors(email.errors)"
            @onBlur="v$.email.$touch"
        >
          <input-error v-if="emailErrors && emailErrors.length" :errors="emailErrors"/>
        </v-input>
        <v-input
            v-model="password.value"
            :label="$t('input.password')"
            placeholder="Enter your password"
            :icon="passwordFieldIcon"
            :type="passwordFieldType"
            @iconClick="showPassword()"
            :class="{ 'field-error': passwordErrors && passwordErrors.length }"
            @input="removeErrors(password.errors)"
            @onBlur="v$.password.$touch"
        >
          <input-error v-if="passwordErrors && passwordErrors.length" :errors="passwordErrors"/>
          <router-link v-else to="/reset" class="link-2"
          >Забыли пароль?
          </router-link
          >
        </v-input>
      </div>
      <input-error v-if="errors && errors.length" :errors="errors"/>
      <v-button
          type="submit"
          class="btn-primary w-full h-15 mb-10 md:mb-7"
          :class="[
            {'cursor-wait' : disabled},
        ]"
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
import {useVuelidate} from "@vuelidate/core"
import {passwordHide} from "../../mixins/passwordHide";
import InputError from "../InputError.vue"
import LoginFormHeader from "../AuthFormHeader.vue"
import validationRules from "../../mixins/validationRules"

export default {
  components: {
    InputError,
    LoginFormHeader,
  },
  mixins: [
    passwordHide,
    validationRules
  ],
  data() {
    return {
      email: {
        value: '',
        errors: []
      },
      password: {
        value: '',
        errors: []
      },
      errors: [],
      disabled: false
    }
  },
  setup() {
    return {v$: useVuelidate()}
  },
  computed: {
    emailErrors() {
      if (this.v$.email.value.$error) {
        return this.v$.email.value.$errors
      } else if (this.email.errors.length) {
        return this.email.errors
      }
    },
    passwordErrors() {
      if (this.v$.password.value.$error) {
        return this.v$.password.value.$errors
      } else if (this.password.errors.length) {
        return this.password.errors
      }
    }
  },
  methods: {
    testErrors() {
      this.v$.email.$touch()
      this.v$.password.$touch()
    },
    login() {
      this.removeErrors(this.errors)
      this.testErrors()
      if (this.v$.email.value.$error || this.v$.password.value.$error) {
        return false
      }

      this.disabled = true
      this.$store.dispatch("userAuth/login", {
        email: this.email.value,
        password: this.password.value,
      })
          .then(() => {
            this.$router.push({name: "TeamsListView"})
          })
          .catch(err => {

            if (Object.keys(err).length) {
              for (const key in err) {
                if (this[key] && err[key].constraints && err[key].constraints.length) {
                  this[key].errors = err[key].constraints
                } else if (err[key].constraints && err[key].constraints.length) {
                  err[key].constraints.forEach(error => {
                    this.errors.push(error)
                  })
                }
              }
            }

          })
          .finally(() => {
            this.disabled = false
          })
    }
  },
  validations() {
    return {
      email: {
        value: this.rules.email
      },
      password: {
        value: this.rules.password
      }
    }
  }
}
</script>
