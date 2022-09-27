<template>
  <h1>My Profile</h1>
  <v-avatar class="mt-12" avatar-size="96" />
  <div class="flex max-w-[930px] mt-12 flex-col">
    <div class="flex w-full items-center">
      <v-input class="w-[445px] mr-5" label="Full name" v-model="fullName" />
      <v-datepicker label="Date of birth" class="w-[445px] ml-5" :date="date">
      </v-datepicker>
    </div>
    <div class="flex w-full">
      <v-input class="w-[445px] mr-5" label="Phone" v-model="phone" />
      <v-input class="w-[445px] ml-5" label="Email" v-model="email" />
    </div>
    <div class="flex w-full">
      <v-input
        class="w-[445px] mr-5"
        label="Old password"
        :icon="passwordFieldIcon"
        @iconClick="showPassword()"
        :type="passwordFieldType"
      />
      <v-input class="w-[445px] ml-5" label="New password" />
    </div>
    <div class="flex w-full">
      <v-select label="Language" class="w-[445px]" />
    </div>
    <v-button class="btn-primary w-[188px] h-[50px] mt-10">Save</v-button>
  </div>
</template>

<script>
import VDatepicker from "./UI/VDatepicker.vue";
import { useVuelidate } from "@vuelidate/core";
import { passwordHide } from "../mixins/passwordHide.js";
import validationRules from "../mixins/validationRules.js";
import VAvatar from "./UI/VAvatar.vue";

export default {
  name: "ProfileFormData",
  data() {
    return {
      fullName: "",
      phone: "",
      email: "",
      date: "",
    };
  },
  created() {
    this.fullName = this.$store.state.userAuth.user.user.full_name;
    this.phone = this.$store.state.userAuth.user.user.phone;
    this.email = this.$store.state.userAuth.user.user.email;
    this.date = this.$store.state.userAuth.user.user.date_of_birth;
  },
  components: {
    VDatepicker,
    VAvatar,
  },
  mixins: [passwordHide, validationRules],
  setup() {
    return { v$: useVuelidate() };
  },
};
</script>

<style scoped></style>
