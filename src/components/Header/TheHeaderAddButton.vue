<template>
  <div class="relative ml-10">
    <v-button
      class="btn-primary h-12 w-32 outline-none"
      type="button"
      @click="changeState"
      @keyup.esc="hideSelect"
      >+ Add
    </v-button>
    <v-select-dropdown width="166" v-if="isActive"> </v-select-dropdown>
  </div>
</template>

<script>
import VSelectDropdown from "../UI/VSelectDropdown.vue";
import changeDropdownComponentStateMixin from "../../mixins/changeDropdownComponentStateMixin.js";
export default {
  name: "TheHeaderAddButton",
  components: {
    VSelectDropdown,
  },
  mixins: [changeDropdownComponentStateMixin],
};
</script>

<style scoped></style>
