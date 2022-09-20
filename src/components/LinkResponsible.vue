<template>
  <div class="flex items-center gap-x-2.5">
    <div class="w-[30px] h-[30px] rounded-full overflow-hidden">
      <img :src="photo" alt="photo" class="w-full h-full object-cover"/>
    </div>
    <a href="#" class="link-3">{{ name }}</a>
  </div>
</template>

<script>
export default {
  name: "LinkResponsible",
  props: {
    name: {
      type: String,
      default: "Not assigned",
    },
    photo: {
      type: String,
      default: "src/assets/img/icons/people.svg",
    },
  },
};
</script>

<style scoped></style>
