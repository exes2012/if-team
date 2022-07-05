<template>
  <the-header />
  <div class="container flex lg:flex-col-reverse">
    <the-aside label="Здесь может быть какая-то справочная инфа" />
    <main class="p-24">
      <div class="w-[445px]" v-if="isOpen">
        <div class="flex items-center gap-x-5 mb-20">
          <v-button
            @click="closeCreateTeam"
            class="p-1 pl-[3px] rounded-full bg-gray-100 [&:hover>svg]:fill-blue-400 transition"
          >
            <v-icon
              name="arrowLeft"
              viewBox="0 0 20 20"
              class="fill-gray-500"
            ></v-icon>
          </v-button>
          <h1>Creating a team</h1>
        </div>

        <v-input label="Team name" placeholder="Enter team name"> </v-input>

        <div class="mb-5">
          <p class="text-3 text-gray-500 mb-3">Team logo</p>
          <div class="flex gap-x-5">
            <the-upload-photo :shape="'rectangle'"></the-upload-photo>
            <div>
              <p class="text-3 mb-2.5 whitespace-nowrap">
                Add your company logo
              </p>
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

        <v-button class="btn-primary w-full h-15">Create</v-button>
      </div>

      <div v-else>
        <h1 class="mb-20 max-w-[445px]">
          Welcome
          <br />
          to the platform <span class="text-blue-400">If.Team</span>!
        </h1>

        <div class="hidden">
          <p class="text mb-12">You have no teams available</p>
        </div>

        <div>
          <p class="text mb-7.5">Ваши доступные команды:</p>
          <enter-companies-list></enter-companies-list>
        </div>

        <v-button class="btn-primary w-[445px] h-15" @click="openCreateTeam">
          Create a new team
        </v-button>
      </div>
    </main>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheAside from "../components/TheAside.vue";
import TheUploadPhoto from "../components/TheUploadPhoto.vue";
import EnterCompaniesList from "../components/EnterCompaniesList.vue";

export default {
  name: "ViewEnter",
  components: {
    TheHeader,
    TheAside,
    TheUploadPhoto,
    EnterCompaniesList,
  },
  data: () => ({
    isOpen: false,
  }),
  methods: {
    openCreateTeam() {
      this.isOpen = true;
    },
    closeCreateTeam() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped></style>
