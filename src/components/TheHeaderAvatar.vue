<template>
  <div
    class="w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center relative min-w-[48px] cursor-pointer"
    @click="changeState"
  >
    <img :src="avatar" alt="" v-if="avatar" />
    <v-icon name="people" width="20" height="20" class="fill-white" v-else />
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

<script setup>
import VSelectDropdown from "./VSelectDropdown.vue";
import { useStore } from "vuex";
import { onBeforeUnmount, onMounted, ref } from "vue";
import DropdownItem from "./DropdownItem.vue";
import router from "../router";

const store = useStore();

const avatar = store.state.userAuth.user.user.avatar;

const goToProfile = () => {
  router.push("/profile");
  isActive.value = false;
};

const logout = () => {
  store.dispatch("userAuth/logout").then(() => router.push("/login"));
};

const changeState = () => {
  isActive.value = !isActive.value;
};

const hideSelect = () => {
  isActive.value = false;
};

const isActive = ref(false);

const items = [
  {
    icon: "profile",
    value: "Profile",
  },
  {
    icon: "flagUA",
    value: "Log out",
  },
];

onMounted(() => {
  document.addEventListener("click", hideSelect, true);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", hideSelect);
});
</script>

<style scoped>
.item {
  @apply [&:hover>svg]:fill-blue-400 items-center hover:text-blue-400;
}

.list-text {
  @apply text-base ml-4;
}
</style>
