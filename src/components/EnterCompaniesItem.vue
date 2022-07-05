<template>
  <li>
    <div>
      <img v-if="isLogoExist" :src="logo" :alt="name" class="w-full h-full" />
      <h2 v-else>{{ name }}</h2>
    </div>
  </li>
</template>

<script>
export default {
  name: "EnterCompaniesItem",
  props: {
    name: {
      type: String,
      default: "",
    },
    logo: {
      type: String,
      default: "",
    },
  },

  data: () => ({
    isLogoExist: false,
  }),

  mounted() {
    return this.logo ? (this.isLogoExist = true) : -1;
  },
};
</script>

<style scoped>
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

div {
  @apply h-10
  flex
  justify-center
  items-center;
}

h2 {
  @apply text-3xl
  font-normal
  text-gray-500
  capitalize;
}
</style>
