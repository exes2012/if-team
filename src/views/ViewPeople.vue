<template>
  <div class="bg-gray-100 w-full h-screen">
    <v-container>
      <v-card class="w-fit mt-32 p-8 relative">
        <h2 class="mb-7">Add iteration</h2>
        <button class="absolute top-5 right-5">
          <v-icon name="close" width="20" height="20"></v-icon>
        </button>
        <form action="#" class="pt-7 border-t border-solid border-gray-200">
          <div class="grid grid-cols-[300px_320px] gap-5 mb-10">
            <div>
              <div class="flex justify-between mb-2">
                <label for="name" class="label">Iteration name</label>
                <span class="message-invalid invisible">Неверный формат</span>
              </div>
              <input
                type="text"
                name="name"
                id="name"
                class="field"
                placeholder="Выберите название"
                required
              />
            </div>

            <div>
              <div class="flex justify-between mb-2">
                <label for="name" class="label">Iteration time</label>
                <span class="message-invalid invisible">Неверный формат</span>
              </div>
              <div class="flex items-center gap-x-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="field w-[128px]"
                  placeholder=" "
                  required
                />
                <div class="w-[15px] h-px bg-gray-400"></div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="field w-[128px]"
                  placeholder=" "
                  required
                />
                <button type="button">
                  <v-icon
                    name="calendar"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  ></v-icon>
                </button>
              </div>
            </div>

            <div class="relative">
              <div class="flex justify-between mb-2">
                <label for="name" class="label">Amount</label>
                <span class="message-invalid invisible">Неверный формат</span>
              </div>
              <input
                type="text"
                name="name"
                id="name"
                class="field text-xl pr-20"
                placeholder=" "
                required
              />
              <div class="absolute bottom-0 right-0">
                <v-button class="btn-primary w-16 h-13" type="button"
                  >USD</v-button
                >
                <ul class="dropdown w-[166px] absolute">
                  <li class="text-2">
                    <img
                      src="../assets/img/icons/flag-usa.svg"
                      class="w-5 h-[13px] inline-block mr-2.5"
                      alt="flag usa"
                    />
                    USD ($)
                  </li>
                  <li class="text-2">
                    <img
                      src="../assets/img/icons/flag-ua.svg"
                      class="w-5 h-[13px] inline-block mr-2.5"
                      alt="flag ua"
                    />
                    UAH (₴)
                  </li>
                  <li class="text-2">
                    <img
                      src="../assets/img/icons/flag-eu.svg"
                      class="w-5 h-[13px] inline-block mr-2.5"
                      alt="flag eu"
                    />
                    EUR (€)
                  </li>
                  <li class="text-2">
                    <img
                      src="../assets/img/icons/flag-gb.svg"
                      class="w-5 h-[13px] inline-block mr-2.5"
                      alt="flag gb"
                    />
                    GBP (£)
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-2">
                <label for="name" class="label">Hours</label>
                <span class="message-invalid invisible">Неверный формат</span>
              </div>
              <input
                type="text"
                name="name"
                id="name"
                class="field"
                placeholder="For example, 160"
                required
              />
            </div>
          </div>
          <v-button class="btn-primary w-48 h-13">Add</v-button>
        </form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import VContainer from "../components/VContainer.vue";
import VCard from "../components/VCard.vue";
import VButton from "../components/VButton.vue";

export default {
  name: "ViewPeople",
  components: {
    VContainer,
    VCard,
    VButton,
  },
};
</script>

<style scoped></style>
