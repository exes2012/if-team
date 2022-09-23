<template>
  <h1 class="mb-10">My Profile</h1>
  <teams-list >
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

<script>
import TeamsList from "./Main/TeamsList.vue";
import TeamsListItem from "./Main/TeamsListItem.vue";

export default {
  name: "ProfileTeams",
  components:{
    TeamsList,
    TeamsListItem
  }
}
</script>

<style scoped>

</style>