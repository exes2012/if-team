<template>
  <the-aside label="Здесь может быть что угодно"/>
  <the-main>
    <auth-form-header
        company-name="If.Team"
        :link-label="$t('reg.registerOr')"
        :link="{ url: '/login' }"
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

<script>
import RegisterFormData from "../components/Registration/RegisterFormData.vue";
import RegisterFormMainInfo from "../components/Registration/RegisterFormMainInfo.vue";
import RegisterFormPhoto from "../components/Registration/RegisterFormPhoto.vue";
import RegisterFormFinish from "../components/Registration/RegisterFormFinish.vue";
import RegisterFormPhotoCrop from "../components/Registration/RegisterFormPhotoCrop.vue";
import VStepper from "../components/VStepper.vue";
import TheHeader from "../components/TheHeader.vue";
import TheAside from "../components/TheAside.vue";
import AuthFormHeader from "../components/AuthFormHeader.vue";

export default {
  components: {
    RegisterFormData,
    RegisterFormMainInfo,
    RegisterFormPhoto,
    RegisterFormFinish,
    RegisterFormPhotoCrop,
    VStepper,
    TheHeader,
    TheAside,
    AuthFormHeader,
  },
  data() {
    return {
      steps: [
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
      ]
    }
  },
  computed: {
    registrationStep() {
      return this.$store.state.userAuth.registrationStep
    },
    isRegisterPhotoCropActive() {
      return this.$store.state.userAuth.isRegisterPhotoCropperActive;
    }
  },
  methods: {
    closeRegisterPhotoCrop() {
      this.$store.commit("userAuth/SET_REGISTER_PHOTO_CROP_STATE", false)
    }
  }
}
</script>

<style scoped></style>
