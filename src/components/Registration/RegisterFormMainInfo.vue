<template>
  <form
      method="post"
      class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100"
  >
    <v-input
        label="Full Name"
        placeholder="Enter your full name"
        v-model="full_name.value"
        :class="{ 'field-error': full_name.errors.length }"
    >
      <!--      <v-input-->
      <!--          label="Full Name"-->
      <!--          placeholder="Enter your full name"-->
      <!--          v-model="data.full_name"-->
      <!--          @onBlur="v$.email.$touch"-->
      <!--          :class="{ 'field-error': v$.email.$error }"-->
      <!--      >-->
      <!--        <input-error v-if="v$.email.$error" :errors="v$.email.$errors"/>-->
      <input-error v-if="full_name.errors.length" :errors="full_name.errors"/>
    </v-input>
    <v-datepicker label="Birthday" @selectDate="getDateOfBirth"/>

    <v-button
        class="btn-primary w-full h-15 mt-12"
        @click.prevent="setRegistrationData"
        :class="{'cursor-wait' : disabled}"
        :disabled="disabled"
    >Next
    </v-button
    >
  </form>
</template>

<script>
import InputError from "../InputError.vue";
import VDatepicker from "../VDatepicker.vue";
// import {useVuelidate} from "@vuelidate/core";
export default {
  components: {
    InputError,
    VDatepicker
  },
  data() {
    return {
      full_name: {
        value: '',
        errors: []
      },
      date_of_birth: {
        value: '',
        errors: []
      },
      disabled: false
    }
  },
  methods: {
    getDateOfBirth(selectedDate) {
      this.date_of_birth.value = selectedDate
    },
    setRegistrationData() {
      this.$store.commit("userAuth/SET_REGISTER_USER_MAIN_INFO", {
        full_name: this.full_name.value,
        date_of_birth: this.date_of_birth.value
      })
      this.$store.commit("userAuth/SET_REGISTER_STEP", 3)
    }
  }

// const rules = useValidationRules()

// const v$ = useVuelidate(rules, data)
}
</script>
