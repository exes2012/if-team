<template>
  <form
      method="post"
      class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100"
  >
    <v-input
        label="Full Name"
        placeholder="Enter your full name"
        v-model="fullName.value"
        :class="{ 'field-error': v$.fullName.value.$error }"
        @onBlur="v$.fullName.$touch"
    >
      <input-error v-if="v$.fullName.value.$errors.length" :errors="v$.fullName.value.$errors"/>
    </v-input>
    <v-datepicker label="Birthday" @selectDate="getDateOfBirth">
      <input-error v-if="dateOfBirth.errors.length" :errors="dateOfBirth.errors"/>
    </v-datepicker>


    <v-button
        class="btn-primary w-full h-15 mt-12"
        @click.prevent="setRegistrationData"
        :class="[
            {'cursor-not-allowed' : v$.$invalid},
            {'cursor-wait' : disabled},
        ]"
        :disabled="disabled || v$.$invalid"
    >Next
    </v-button
    >
  </form>
</template>

<script>
import {useVuelidate} from "@vuelidate/core";

import InputError from "../InputError.vue";
import VDatepicker from "../VDatepicker.vue";
import validationRules from "../../mixins/validationRules";

export default {
  components: {
    InputError,
    VDatepicker
  },
  mixins: [
    validationRules
  ],
  setup() {
    return {v$: useVuelidate()}
  },
  data() {
    return {
      fullName: {
        value: '',
        errors: []
      },
      dateOfBirth: {
        value: '',
        errors: []
      },
      disabled: false,
    }
  },
  methods: {
    getDateOfBirth(selectedDate) {
      this.removeErrors(this.dateOfBirth.errors)
      this.dateOfBirth.value = selectedDate
    },
    testDate(date) {
      if (!date) {
        this.dateOfBirth.errors.push('DD/MM/YYYY')
      }
    },
    setRegistrationData() {
      this.v$.fullName.$touch()
      this.testDate(this.dateOfBirth.value)
      if (!this.v$.fullName.value.$errors.length) {
        this.$store.commit("userAuth/SET_REGISTER_USER_MAIN_INFO", {
          full_name: this.fullName.value,
          date_of_birth: this.dateOfBirth.value
        })
        this.$store.commit("userAuth/SET_REGISTER_STEP", 3)
      }
    }
  },
  validations() {
    return {
      fullName: {
        value: this.rules.fullName
      },
    }
  }
}
</script>
