<template>
  <the-aside label="Здесь может быть что угодно"/>
  <the-main>
    <login-form-header
        company-name="If.Team"
        :link-label="$t('reg.registerOr')"
        :link="{
          label: $t('reg.login'),
          url: '/login',
        }"
    />
    <div class="w-[445px] flex flex-col">
      <v-stepper :steps="steps" :step="registrationStep"/>
      <!-- Step 1 -->
      <register-form-data v-if="registrationStep === 1"/>
      <register-form-main-info v-if="registrationStep === 2"/>
      <register-form-photo v-if="registrationStep === 3"/>
      <register-form-finish v-if="registrationStep === 4"/>
    </div>
  </the-main>

  <register-form-photo-crop
      @click.self="closeRegisterPhotoCrop"
      v-if="isRegisterPhotoCropActive"
  />
</template>

<script setup>
import RegisterFormData from "../components/Registration/RegisterFormData.vue";
import RegisterFormMainInfo from "../components/Registration/RegisterFormMainInfo.vue";
import RegisterFormPhoto from "../components/Registration/RegisterFormPhoto.vue";
import RegisterFormFinish from "../components/Registration/RegisterFormFinish.vue";
import RegisterFormPhotoCrop from "../components/Registration/RegisterFormPhotoCrop.vue";

import {useStore} from "vuex";
import {computed, reactive} from "vue";
import VStepper from "../components/VStepper.vue";
import TheAside from "../components/TheAside.vue";
import LoginFormHeader from "../components/AuthFormHeader.vue";

const store = useStore();

const registrationStep = computed(() => store.state.userAuth.registrationStep);

const steps = reactive([
  {
    number: 1,
    asideLabel: "Справочная информация на шаге 1",
    description: "Здесь может быть описание",
  },
  {
    number: 2,
    asideLabel: "Справочная информация на шаге 2",
    description: "Здесь может быть описание",
  },
  {
    number: 3,
    asideLabel: "Справочная информация на шаге 3",
    description: "Здесь может быть описание",
  },
]);

const isRegisterPhotoCropActive = computed(() => {
  return store.state.userAuth.isRegisterPhotoCropperActive;
});

const closeRegisterPhotoCrop = () => {
  store.commit("userAuth/SET_REGISTER_PHOTO_CROP_STATE", false);
};
</script>

<style scoped></style>
