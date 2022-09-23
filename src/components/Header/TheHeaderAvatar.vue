<template>
  <div
      class="w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center relative min-w-[48px] cursor-pointer"
      @click="changeState"
  >
    <!--    <img :src="avatar" alt="" v-if="avatar" />-->
    <v-icon name="people" width="20" height="20" class="fill-white"/>
    <the-header-avatar-menu-main/>
  </div>
</template>

<script>
import VSelectDropdown from "../VSelectDropdown.vue";
import DropdownItem from "../DropdownItem.vue";
import TheHeaderAvatarMenuMain from "./TheHeaderAvatarMenuMain.vue";
import changeDropdownComponentStateMixin from "../../mixins/changeDropdownComponentStateMixin.js";

export default {
  name: "TheHeaderAvatar",
  components: {
    VSelectDropdown,
    DropdownItem,
    TheHeaderAvatarMenuMain,
  },
  mixins: [changeDropdownComponentStateMixin],
  data() {
    return {
      avatar: this.$store.state.userAuth.user.avatar,
    };
  },
  methods: {},
};

// const store = useStore();
//
// const avatar = store.state.userAuth.user.user.avatar;
//
// const goToProfile = () => {
//   router.push("/profile");
//   isActive.value = false;
// };
//
// const logout = () => {
//   store.dispatch("userAuth/logout").then(() => router.push("/login"));
// };
//
// const changeState = () => {
//   isActive.value = !isActive.value;
// };
//
// const hideSelect = () => {
//   isActive.value = false;
// };
//
// const isActive = ref(false);
//
// const items = [
//   {
//     icon: "profile",
//     value: "Profile",
//   },
//   {
//     icon: "flagUA",
//     value: "Log out",
//   },
// ];
//
// onMounted(() => {
//   document.addEventListener("click", hideSelect, true);
// });
//
// onBeforeUnmount(() => {
//   document.removeEventListener("click", hideSelect);
// });
</script>

<style scoped>
.item {
  @apply [&:hover>svg]:fill-blue-400 items-center hover:text-blue-400;
}

.list-text {
  @apply text-base ml-4;
}
</style>
