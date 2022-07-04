<template>
  <ul class="">
    <li v-for="team in teams" :key="team.id">
      <div class="h-10">
        <img :src="team.logo" :alt="team.name" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "EnterCompaniesList",
  data: () => ({
    teams: [
      {
        id: 1,
        name: "Google",
        logo: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg",
      },
      {
        id: 2,
        name: "Facebook",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg",
      },
      {
        id: 3,
        name: "webnauts",
        logo: "http://localhost:3000/src/assets/img/logo-big.svg",
      },
      {
        id: 4,
        name: "some team",
        logo: "",
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

li {
  @apply max-w-[445px]
	flex
	justify-center
	items-center
	bg-gray-100
	rounded-lg
	p-11
	border
	border-solid
	border-transparent
	cursor-pointer
	transition
	hover:border-blue-400;
}

img {
  @apply w-full
  h-full;
}
</style>
