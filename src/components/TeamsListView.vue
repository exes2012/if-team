<template>
  <h1>Welcome</h1>
  <h1>to the platform <span class="text-blue-400">If.Team!</span></h1>

  <teams-list>
    <teams-list-item teamName="Webnauts" />
    <teams-list-item teamName="Webnauts" />
    <teams-list-item teamName="Webnauts" />
    <teams-list-item teamName="Webnauts" />
    <teams-list-item teamName="Webnauts" />
    <teams-list-item teamName="Webnauts" />
    <teams-list-item teamName="Webnauts" />
    <teams-list-item teamName="Webnauts" />
    <teams-list-item teamName="Webnauts" />
    <teams-list-item teamName="Webnauts" />
  </teams-list>
  <v-button
    class="btn-primary w-[445px] h-[60px]"
    @click="$router.push('/createTeam')"
    >Create a new team</v-button
  >
</template>

<script setup>
import teamsList from "./TeamsList.vue";
import teamsListItem from "./TeamsListItem.vue";
</script>

<style scoped></style>
