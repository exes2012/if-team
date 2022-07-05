<template>
  <ul class="">
    <enter-companies-item
      v-for="team in teams"
      :key="team.id"
      :name="team.name"
      :logo="team.logo"
    ></enter-companies-item>
  </ul>
</template>

<script>
import EnterCompaniesItem from "./EnterCompaniesItem.vue";

export default {
  name: "EnterCompaniesList",
  components: {
    EnterCompaniesItem,
  },

  data: () => ({
    teams: [
      {
        id: 1,
        name: "webnauts",
        logo: "http://localhost:3000/src/assets/img/logo-big.svg",
      },
      {
        id: 2,
        name: "company",
        logo: "",
      },
      {
        id: 3,
        name: "Google",
        logo: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg",
      },
      {
        id: 4,
        name: "Facebook",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg",
      },
    ],
  }),
};
</script>

<style scoped>
ul {
  @apply max-h-[393px]
	max-w-[538px]
	mb-12
	overflow-y-auto
	scroll-thin
	flex
	flex-col
	gap-y-7
	pr-20;
}
</style>
