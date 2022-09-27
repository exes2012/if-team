<template>
  <form
    method="post"
    class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100"
  >
    <v-input
      label="E-mail"
      placeholder="Your e-mail"
      v-model="email.value"
      :class="{ 'field-error': emailErrors && emailErrors.length }"
      @input="removeErrors(email.errors)"
      @onBlur="v$.email.$touch"
    >
      <input-error
        v-if="emailErrors && emailErrors.length"
        :errors="emailErrors"
      />
    </v-input>
    <v-input
      :label="$t('input.phone')"
      placeholder="+38 000 00 00 000"
      v-model="phone.value"
      :class="{ 'field-error': phoneErrors && phoneErrors.length }"
      @input="removeErrors(phone.errors)"
      @onBlur="v$.phone.$touch"
    >
      <input-error
        v-if="phoneErrors && phoneErrors.length"
        :errors="phoneErrors"
      />
    </v-input>
    <v-input
      :label="$t('input.password')"
      v-model="password.value"
      placeholder="******"
      :icon="passwordFieldIcon"
      :type="passwordFieldType"
      @iconClick="showPassword()"
      :class="{ 'field-error': passwordErrors && passwordErrors.length }"
      @input="removeErrors(password.errors)"
      @onBlur="v$.password.$touch"
    >
      <input-error
        v-if="passwordErrors && passwordErrors.length"
        :errors="passwordErrors"
      />
    </v-input>
    <v-select label="Language" :options="languages" />
    <v-button
      class="btn-primary w-full h-15 mt-12"
      @click.prevent="checkCredentials"
      :class="[{ 'cursor-wait': disabled }]"
      :disabled="disabled"
      >{{ $t("button.next") }}
    </v-button>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { passwordHide } from "../../mixins/passwordHide";
import InputError from "../InputError.vue";
import validationRules from "../../mixins/validationRules";
import VSelect from "../VSelect.vue";

export default {
  components: {
    InputError,
    VSelect,
  },
  mixins: [passwordHide, validationRules],
  computed: {
    emailErrors() {
      if (this.v$.email.value.$error) {
        return this.v$.email.value.$errors;
      } else if (this.email.errors.length) {
        return this.email.errors;
      }
    },
    phoneErrors() {
      if (this.v$.phone.value.$error) {
        return this.v$.phone.value.$errors;
      } else if (this.phone.errors.length) {
        return this.phone.errors;
      }
    },
    passwordErrors() {
      if (this.v$.password.value.$error) {
        return this.v$.password.value.$errors;
      } else if (this.password.errors.length) {
        return this.password.errors;
      }
    },
    // languages() {
    //   return this.$store.state.language.languages
    // }
  },
  data() {
    return {
      languages: [
        { name: "En", id: 1 },
        { name: "Ru", id: 2 },
      ],
      v$: useVuelidate(),
      email: {
        value: "",
        errors: [],
      },
      phone: {
        value: "",
        errors: [],
      },
      password: {
        value: "",
        errors: [],
      },
      disabled: false,
    };
  },

  methods: {
    setRegisterUserData() {
      this.$store.commit("userAuth/SET_REGISTER_USER_DATA", {
        email: this.email.value,
        phone: this.phone.value,
        password: this.password.value,
      });
    },
    testErrors() {
      this.v$.email.$touch();
      this.v$.phone.$touch();
      this.v$.password.$touch();
    },
    checkCredentials() {
      this.testErrors();
      if (
        this.v$.email.value.$error ||
        this.v$.phone.value.$error ||
        this.v$.password.value.$error
      ) {
        return false;
      }

      this.disabled = true;
      this.setRegisterUserData();
      this.$store
        .dispatch("userAuth/checkCredentials", {
          phone: this.$store.state.userAuth.phone,
          email: this.$store.state.userAuth.email,
          password: this.$store.state.userAuth.password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          if (Object.keys(err).length) {
            for (const key in err) {
              if (
                this[key] &&
                err[key].constraints &&
                err[key].constraints.length
              ) {
                this[key].errors = err[key].constraints;
              }
            }
          }
        })
        .finally(() => {
          this.disabled = false;
        });
    },
  },
  validations() {
    return {
      email: {
        value: this.rules.email,
      },
      phone: {
        value: this.rules.phone,
      },
      password: {
        value: this.rules.password,
      },
    };
  },

  //   const rules = useValidationRules();
  //
  //   const v$ = useVuelidate(rules, {
  //     email: data.email.value,
  //     phone: data.phone.value,
  //     password: data.password.value
  //   });
};
</script>

<style scoped></style>
