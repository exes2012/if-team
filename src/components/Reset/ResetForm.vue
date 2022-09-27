<template>
  <form method="post" @submit.prevent="sendEmail()">
    <div class="text-1 max-w-[445px] mt-4">Введите email, который Вы использовали при регистрации для восстановления
      пароля
    </div>
    <v-input
        class="max-w-[420px] mt-14"
        label="E-mail"
        v-model="email.value"
        :class="{ 'field-error': emailErrors && emailErrors.length }"
        @input="removeErrors(email.errors)"
        @onBlur="v$.email.$touch"
    >
      <input-error v-if="emailErrors && emailErrors.length" :errors="emailErrors"/>
    </v-input>
    <v-button
        class="btn-primary w-[420px] h-[60px] mt-14"
        :class="[
            {'cursor-wait' : disabled},
        ]"
        :disabled="disabled"
    >Далее
    </v-button>
  </form>
</template>

<script>
import {useVuelidate} from "@vuelidate/core"
import InputError from "../InputError.vue"
import validationRules from "../../mixins/validationRules"

export default {
  name: "ResetForm",
  components: {
    InputError,
  },
  mixins: [
    validationRules
  ],
  data() {
    return {
      v$: useVuelidate(),
      email: {
        value: '',
        errors: []
      },
      disabled: false,
    }
  },
  computed: {
    emailErrors() {
      if (this.v$.email.value.$error) {
        return this.v$.email.value.$errors
      } else if (this.email.errors.length) {
        return this.email.errors
      }
    },
  },
  methods: {
    testErrors() {
      this.v$.email.$touch()
    },
    sendEmail() {
      this.testErrors()
      if (this.v$.email.value.$error) {
        return false
      }

      this.disabled = true
      this.$store.dispatch('resetPassword/sendEmail', {
        email: this.email.value,
      })
          .then(res => {
            console.log(res)
            this.$router.push('/reset/success')
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
  },
  validations() {
    return {
      email: {
        value: this.rules.email
      }
    }
  }
}
</script>

<style scoped>

</style>