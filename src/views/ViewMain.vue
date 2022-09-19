<template>
  <the-aside label="Здесь может быть какая-то информация" />
  <the-main>
    <router-view />
  </the-main>
  <team-create-photo-crop
    v-if="isTeamPhotoCropActive"
    @click.self="closeTeamPhotoCrop"
  />
</template>

<script setup>
import TheAside from "../components/TheAside.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import TeamCreatePhotoCrop from "../components/TeamCreatePhotoCrop.vue";

const store = useStore();

const isTeamPhotoCropActive = computed(() => {
  return store.state.teams.isTeamPhotoCropperActive;
});

const closeTeamPhotoCrop = () => {
  store.commit("teams/SET_TEAM_PHOTO_CROP_STATE", false);
};
</script>

<style scoped></style>
