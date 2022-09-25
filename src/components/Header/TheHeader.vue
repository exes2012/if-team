<template>
  <div
      class="flex h-[100px] w-full bg-white border-b-2 border-b-gray-100 fixed z-10"
  >
    <v-container class="items-center">
      <the-header-logo class="mr-14 shrink-0"/>
      <slot></slot>
      <!--      <locale-changer/>-->
    </v-container>
  </div>
</template>
<script>
import TheHeaderLogo from "./TheHeaderLogo.vue";
import VContainer from "../VContainer.vue";
// import LocaleChanger from "../Lang/LocaleChanger.vue";

export default {
  name: "TheHeader",
  components: {
    // LocaleChanger,
    VContainer,
    TheHeaderLogo,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
