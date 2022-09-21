<template>
  <div class="flex flex-col w-[445px]">
    <div class="flex">
      <v-button
        @click="this.$router.push('/')"
        class="p-1 pl-[3px] rounded-full bg-gray-100 [&:hover>svg]:fill-blue-400 transition w-10"
      >
        <v-icon
          name="arrowLeft"
          viewBox="0 0 20 20"
          class="fill-gray-500"
        ></v-icon>
      </v-button>
      <h1 class="ml-5">Creating a team</h1>
    </div>
    <v-input
      label="Team name"
      placeholder="Enter team name"
      class="mt-20"
      v-model="teamName"
    />
    <v-input
      label="Team web-address"
      placeholder="Enter team web-address"
      class="mt-2"
      v-model="teamAddressName"
    />
    <div class="mb-5 flex justify-center text-2">
      https://{{ teamAddress }}.if.team
    </div>
    <div class="mb-5">
      <p class="text-3 text-gray-500 mb-3">Team logo</p>
      <div class="flex gap-x-5">
        <team-avatar-drop-zone @drop.prevent="drop" />
        <div>
          <p class="text-3 mb-2.5 whitespace-nowrap">Add your company logo</p>
          <p class="text-4 text-gray-400 mb-3">
            No more than 5 Mb.
            <br />
            (jpg, png, jpeg)
          </p>
        </div>
      </div>
    </div>

    <div class="mb-12">
      <v-checkbox label="Leave company name"></v-checkbox>
    </div>

    <v-button class="btn-primary w-full h-15" @click="createTeam"
      >Create
    </v-button>
  </div>
</template>

<script>
import TeamAvatarDropZone from "./TeamAvatarDropZone.vue";

export default {
  name: "TeamsCreateTeam",
  data() {
    return {
      teamName: "",
      teamAddressName: "",
      dropzoneFile: "",
    };
  },
  methods: {
    drop(e) {
      this.dropzoneFile = e.dataTransfer.files[0];
      this.setPhotoToCrop();
      this.openRegisterPhotoCrop();
    },
    setPhotoToCrop() {
      this.$store.commit("teams/SET_TEAM_PHOTO", this.dropzoneFile);
    },
    openRegisterPhotoCrop() {
      this.$store.commit("teams/SET_TEAM_PHOTO_CROP_STATE", true);
    },
    createTeam() {
      const formData = new FormData();
      formData.append("name", this.teamName.value);
      formData.append("address", this.teamAddress.value);
      formData.append("logo", this.$store.state.teams.logo);
      this.$store.dispatch("teams/createTeam", formData);
    },
  },
  computed: {
    teamAddress() {
      return this.teamAddressName.value + "if.team";
    },
  },
};
//
// const store = useStore();
//
// const teamName = ref("");
// const teamAddressName = ref("");
// const teamAddress = computed(() => {
//   return teamAddressName.value + "if.team";
// });
// let dropzoneFile = ref("");
//
// const drop = (e) => {
//   dropzoneFile.value = e.dataTransfer.files[0];
//   setPhotoToCrop();
//   openRegisterPhotoCrop();
// };
//
// const setPhotoToCrop = () => {
//   store.commit("teams/SET_TEAM_PHOTO", dropzoneFile);
// };
//
// const openRegisterPhotoCrop = () => {
//   store.commit("teams/SET_TEAM_PHOTO_CROP_STATE", true);
// };
//
// const createTeam = () => {
//   const formData = new FormData();
//   formData.append("name", teamName.value);
//   formData.append("address", teamAddress.value);
//   formData.append("logo", store.state.teams.logo);
//   store.dispatch("teams/createTeam", formData);
// };
</script>

<style scoped></style>
