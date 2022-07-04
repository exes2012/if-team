<template>
  <the-header />
  <div class="container flex lg:flex-col-reverse">
    <the-aside label="Здесь может быть какая-то справочная инфа" />
    <main class="p-24">
      <div class="w-[445px]" v-if="isOpen">
        <h1
          class="mb-20 hover:text-blue-400 cursor-pointer transition"
          @click="closeCreateTeam"
        >
          &#60; Создание команды
        </h1>

        <v-input
          label="Название команды"
          placeholder="Введите название команды"
        >
        </v-input>

        <div class="mb-5">
          <p class="text-3 text-gray-500 mb-3">Логотип команды</p>
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

        <v-button class="btn-primary w-full h-15">Создать</v-button>
      </div>

      <div v-else>
        <h1 class="mb-20 max-w-[445px]">
          Добро пожаловать на платформу If.Team!
        </h1>

        <div class="hidden">
          <p class="text mb-12">У вас нет доступных команд</p>
        </div>

        <div>
          <p class="text mb-7.5">Ваши доступные команды:</p>
          <enter-companies-list></enter-companies-list>
        </div>

        <v-button class="btn-primary w-[445px] h-15" @click="openCreateTeam">
          Создать новую команду
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
