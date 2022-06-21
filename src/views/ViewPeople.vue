<template>
  <div class="bg-gray-100 w-full min-h-screen">
    <v-container class="flex-col">
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
      <v-card class="max-w-[817px] w-full mt-32 p-10">
        <div class="flex justify-between items-center mb-5">
          <p class="text-1">Description</p>
          <v-icon name="arrowDown" viewBox="0 0 20 20"></v-icon>
        </div>
        <textarea
          name="description"
          id="description"
          placeholder="Project description"
          class="field resize-none p-5 h-[107px] mb-10"
        ></textarea>
        <div class="flex">
          <div class="w-1/2 border-r border-solid border-gray-200 pr-10">
            <div class="flex justify-between">
              <p class="text-1">Files</p>
              <v-button class="btn-add-1">+ Add File</v-button>
            </div>
            <ul class="mt-5">
              <li
                class="flex justify-between items-center py-[5px] border-b border-solid border-gray-100"
              >
                <p class="text-3 max-w-[290px] break-all">Filename.png</p>
                <v-button class="w-[25px] h-[25px] bg-gray-100 rounded-full">
                  <v-icon
                    name="close"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                  ></v-icon>
                </v-button>
              </li>
              <li
                class="flex justify-between items-center py-[5px] border-b border-solid border-gray-100"
              >
                <p class="text-3 max-w-[290px] break-all">Filename.png</p>
                <v-button class="w-[25px] h-[25px] bg-gray-100 rounded-full">
                  <v-icon
                    name="close"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                  ></v-icon>
                </v-button>
              </li>
              <li
                class="flex justify-between items-center py-[5px] border-b border-solid border-gray-100"
              >
                <p class="text-3 max-w-[290px] break-all">
                  ioghjf98wyfufjh98wejhfr98erg45g389ewf4r9oj489.png
                </p>
                <v-button class="w-[25px] h-[25px] bg-gray-100 rounded-full">
                  <v-icon
                    name="close"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                  ></v-icon>
                </v-button>
              </li>
              <li
                class="flex justify-between items-center py-[5px] border-b border-solid border-gray-100"
              >
                <p class="text-3 max-w-[290px] break-all">Filename.png</p>
                <v-button class="w-[25px] h-[25px] bg-gray-100 rounded-full">
                  <v-icon
                    name="close"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                  ></v-icon>
                </v-button>
              </li>
            </ul>
          </div>
          <div class="w-1/2 pl-10">
            <div class="flex justify-between">
              <p class="text-1">Services</p>
              <v-button class="btn-add-1">+ Add Services</v-button>
            </div>
            <ul class="flex flex-wrap mt-5 gap-x-2.5 gap-y-2">
              <li class="btn-service chosen">Дизайн</li>
              <li class="btn-service chosen">Front-end</li>
              <li class="btn-service chosen">ererehertgdgrthgrtghrtegreg</li>
              <li class="btn-service chosen">SMM</li>
              <li class="btn-service chosen">SEO</li>
            </ul>
          </div>
        </div>
      </v-card>
      <v-card class="max-w-[462px] w-full mt-10 p-8 relative">
        <h2 class="mb-7">Services</h2>
        <button class="absolute top-5 right-5">
          <v-icon name="close" width="20" height="20"></v-icon>
        </button>
        <div class="pt-7 border-t border-solid border-gray-200">
          <ul class="flex flex-wrap gap-x-2.5 gap-y-2">
            <li class="btn-service selected">Дизайн</li>
            <li class="btn-service selected">Front-end</li>
            <li class="btn-service">Back-end</li>
            <li class="btn-service selected">SMM</li>
            <li class="btn-service selected">SEO</li>
            <li class="btn-service">Project management</li>
            <li class="btn-service">Mobile</li>
          </ul>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import VButton from "../components/VButton.vue";

export default {
  name: "ViewPeople",
  components: {
    VButton,
  },
};
</script>

<style scoped></style>
