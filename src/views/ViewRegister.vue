<template>
  <the-header />
  <div class="container flex lg:flex-col-reverse">
    <the-aside label="Здесь может быть что угодно" />
    <main class="m-28 w-[445px]">
      <login-form-header
        company-name="If.Team"
        link-label="Register or"
        :link="link"
      />
      <v-stepper :steps="steps" :step="registrationStep" />
      <!-- Step 1 -->
      <register-form-data v-if="registrationStep === 1" />
      <register-form-main-info v-if="registrationStep === 2" />
      <register-form-photo v-if="registrationStep === 3" />
      <register-form-finish v-if="registrationStep === 4" />
    </main>
  </div>
</template>

<script setup>
import RegisterFormData from "../components/RegisterFormData.vue";
import RegisterFormMainInfo from "../components/RegisterFormMainInfo.vue";
import RegisterFormPhoto from "../components/RegisterFormPhoto.vue";
import RegisterFormFinish from "../components/RegisterFormFinish.vue";

import { useStore } from "vuex";
import { computed, reactive } from "vue";
import VStepper from "../components/VStepper.vue";
import TheHeader from "../components/TheHeader.vue";
import TheAside from "../components/TheAside.vue";
import LoginFormHeader from "../components/AuthFormHeader.vue";

const store = useStore();

const registrationStep = computed(() => store.state.userAuth.registrationStep);

const steps = reactive([
  {
    number: 1,
    label: "Data",
    asideLabel: "Справочная информация на шаге 1",
    description: "Здесь может быть описание",
  },
  {
    number: 2,
    label: "Main information",
    asideLabel: "Справочная информация на шаге 2",
    description: "Здесь может быть описание",
  },
  {
    number: 3,
    label: "Complete registration",
    asideLabel: "Справочная информация на шаге 3",
    description: "Здесь может быть описание",
  },
]);

const link = reactive({
  label: "login",
  url: "/login",
});
</script>

<style scoped></style>
