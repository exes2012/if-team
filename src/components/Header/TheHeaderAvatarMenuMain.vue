<template>
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
</template>

<script>
import VSelectDropdown from "../UI/VSelectDropdown.vue";
import DropdownItem from "../DropdownItem.vue";
export default {
  name: "TheHeaderAvatarMenuMain",
  components: {
    DropdownItem,
    VSelectDropdown,
  },
  data() {
    return {
      isActive: false,
      items: [
        {
          icon: "profile",
          value: "Profile",
        },
        {
          icon: "flagUA",
          value: "Log out",
        },
      ],
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
</script>

<style scoped></style>
