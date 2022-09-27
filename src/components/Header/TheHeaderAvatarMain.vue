<template>
  <div class="relative cursor-pointer" @click="changeState">
    <v-avatar />
    <v-select-dropdown width="146" v-if="isActive" right>
      <dropdown-item class="item" @click="goToProfile">
        <v-icon name="profile" height="19" width="14" class="fill-gray-500" />
        <span class="list-text">Profile</span>
      </dropdown-item>
      <dropdown-item class="item" @click="logout">
        <v-icon name="logout" height="16" width="16" class="fill-gray-500" />
        <span class="list-text">Log out</span>
      </dropdown-item>
    </v-select-dropdown>
  </div>
</template>

<script>
import VSelectDropdown from "../VSelectDropdown.vue";
import DropdownItem from "../DropdownItem.vue";
import changeDropdownComponentStateMixin from "../../mixins/changeDropdownComponentStateMixin.js";
import VAvatar from "../VAvatar.vue";

export default {
  name: "TheHeaderAvatar",
  components: {
    VSelectDropdown,
    DropdownItem,
    VAvatar,
  },
  mixins: [changeDropdownComponentStateMixin],
  data() {
    return {
      avatar: this.$store.state.userAuth.user?.avatar,
    };
  },
  methods: {
    goToProfile() {
      this.$router.push("/profile");
      this.isActive = false;
    },
    logout() {
      this.$store
        .dispatch("userAuth/logout")
        .then(() => this.$router.push("/login"));
    },
  },
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
