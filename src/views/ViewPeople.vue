<template>
  <div class="bg-gray-100 w-full min-h-screen">
    <v-container class="flex-col">
      <!-- Add Iteration -->
      <v-card class="w-fit mt-32 p-8 relative">
        <v-button class="absolute top-5 right-5">
          <v-icon
            name="close"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            class="hover:fill-blue-400"
          ></v-icon>
        </v-button>
        <div class="mb-7 pb-7 border-b border-solid border-gray-200">
          <h2>Add iteration</h2>
        </div>
        <form action="#">
          <div class="grid grid-cols-[300px_320px] gap-5 mb-10">
            <div>
              <div class="flex justify-between mb-2">
                <label for="iteration-name" class="label">Iteration name</label>
                <span class="message-invalid invisible">Неверный формат</span>
              </div>
              <input
                type="text"
                name="iteration-name"
                id="iteration-name"
                class="field"
                placeholder="Выберите название"
                required
              />
            </div>

            <div>
              <div class="flex justify-between mb-2">
                <label for="iteration-time" class="label">Iteration time</label>
                <span class="message-invalid invisible">Неверный формат</span>
              </div>
              <div class="flex items-center gap-x-2.5">
                <input
                  type="text"
                  name="iteration-time"
                  id="iteration-time"
                  class="field w-[128px]"
                  placeholder=" "
                  required
                />
                <div class="w-[15px] h-px bg-gray-400"></div>
                <input
                  type="text"
                  name="iteration-time-end"
                  id="iteration-time-end"
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
                    class="hover:fill-blue-400"
                  ></v-icon>
                </button>
              </div>
            </div>

            <div class="relative">
              <div class="flex justify-between mb-2">
                <label for="amount" class="label">Amount</label>
                <span class="message-invalid invisible">Неверный формат</span>
              </div>
              <input
                type="text"
                name="amount"
                id="amount"
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
                <label for="hours" class="label">Hours</label>
                <span class="message-invalid invisible">Неверный формат</span>
              </div>
              <input
                type="text"
                name="hours"
                id="hours"
                class="field"
                placeholder="For example, 160"
                required
              />
            </div>
          </div>
          <v-button class="btn-primary w-48 h-13">Add</v-button>
        </form>
      </v-card>

      <!-- Description -->
      <v-card
        class="max-w-[817px] w-full mt-32 p-10 max-h-[108px] overflow-hidden hover:max-h-full transition-all"
      >
        <div class="flex justify-between items-center mb-10">
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
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    class="hover:fill-blue-400"
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
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    class="hover:fill-blue-400"
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
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    class="hover:fill-blue-400"
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
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    class="hover:fill-blue-400"
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

      <!-- Services -->
      <v-card class="max-w-[462px] w-full mt-10 p-8 relative">
        <v-button class="absolute top-5 right-5">
          <v-icon
            name="close"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            class="hover:fill-blue-400"
          ></v-icon>
        </v-button>
        <div class="mb-7 pb-7 border-b border-solid border-gray-200">
          <h2>Services</h2>
        </div>
        <div>
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

      <!-- Project Creation -->
      <v-card class="max-w-[730px] w-full mt-10 p-8 relative">
        <v-button class="absolute top-5 right-5">
          <v-icon
            name="close"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            class="hover:fill-blue-400"
          ></v-icon>
        </v-button>
        <div class="mb-7 pb-7 border-b border-solid border-gray-200">
          <h2 class="mb-5">Project Creation</h2>
          <p class="text-2 text-gray-400">Step 2 of 2</p>
        </div>

        <!-- Step 1 -->
        <form action="#" class="hidden">
          <div class="flex flex-col gap-y-7 mb-24">
            <div>
              <div class="flex justify-between mb-2">
                <label for="project-name" class="label">Project name</label>
                <span class="message-invalid invisible">Неверный формат</span>
              </div>
              <input
                type="text"
                name="project-name"
                id="project-name"
                class="field"
                placeholder=" "
                required
              />
            </div>

            <div class="grid grid-cols-2 gap-x-5">
              <div class="relative">
                <div class="flex justify-between mb-2">
                  <label for="project-type" class="label">Project type</label>
                  <span class="message-invalid invisible">Неверный формат</span>
                </div>
                <input
                  type="text"
                  name="project-type"
                  id="project-type"
                  class="field"
                  placeholder="Fixed Price"
                  required
                />
                <button class="btn-field" type="button">
                  <p class="icon-arrow-down"></p>
                </button>

                <ul class="dropdown hidden">
                  <li>Копирайтинг</li>
                  <li>SMM</li>
                  <li>Back-end</li>
                  <li>Front-end</li>
                </ul>
              </div>
              <div class="relative">
                <div class="flex justify-between mb-2">
                  <label for="client" class="label">Client</label>
                  <span class="message-invalid invisible">Неверный формат</span>
                </div>
                <input
                  type="text"
                  name="client"
                  id="client"
                  class="field"
                  placeholder="Select"
                  required
                />
                <button class="btn-field" type="button">
                  <p class="icon-arrow-down"></p>
                </button>

                <ul class="dropdown hidden">
                  <li>Копирайтинг</li>
                  <li>SMM</li>
                  <li>Back-end</li>
                  <li>Front-end</li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-x-5">
              <div class="relative">
                <div class="flex justify-between mb-2">
                  <label for="project-budget" class="label"
                    >Project budget</label
                  >
                  <span class="message-invalid invisible">Неверный формат</span>
                </div>
                <input
                  type="text"
                  name="project-budget"
                  id="project-budget"
                  class="field text-xl pr-20"
                  placeholder=" "
                  required
                />
                <div class="absolute bottom-0 right-0">
                  <v-button class="btn-primary w-16 h-13" type="button"
                    >USD</v-button
                  >
                  <ul class="dropdown hidden w-[166px] absolute">
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
            </div>

            <div class="grid grid-cols-2 gap-x-5">
              <div class="relative">
                <div class="flex justify-between mb-2">
                  <label for="project-start" class="label">Project Start</label>
                  <span class="message-invalid invisible">Неверный формат</span>
                </div>
                <input
                  type="text"
                  name="project-start"
                  id="project-start"
                  class="field"
                  placeholder=" "
                  required
                />
                <button class="btn-field" type="button">
                  <p class="icon-calendar"></p>
                </button>
              </div>
              <div class="relative">
                <div class="flex justify-between mb-2">
                  <label for="project-finish" class="label"
                    >Project Finish</label
                  >
                  <span class="message-invalid invisible">Неверный формат</span>
                </div>
                <input
                  type="text"
                  name="project-finish"
                  id="project-finish"
                  class="field"
                  placeholder=" "
                  required
                />
                <button class="btn-field" type="button">
                  <p class="icon-calendar"></p>
                </button>
              </div>
            </div>

            <div class="flex gap-x-20">
              <div>
                <p class="text-3 text-gray-500 mb-3.5">Responsible</p>
                <v-button class="btn-plus w-5 h-5" type="button"></v-button>
              </div>

              <div>
                <p class="text-3 text-gray-500 mb-3.5">Project Manager</p>
                <v-button class="btn-plus w-5 h-5" type="button"></v-button>
              </div>

              <div>
                <p class="text-3 text-gray-500 mb-3.5">Participants</p>
                <v-button class="btn-plus w-5 h-5" type="button"></v-button>
              </div>
            </div>
          </div>
          <v-button class="btn-primary w-48 h-13 ml-auto">Add</v-button>
        </form>

        <!-- Step 2 -->
        <form action="#" class="">
          <div class="mb-7 pb-7 border-b border-solid border-gray-200">
            <p class="text-1 mb-5">Description and services</p>

            <div class="flex justify-between items-center mb-2.5">
              <p class="text-3 text-gray-400">Services</p>
              <p class="text-3 text-gray-400">Selected: 3</p>
            </div>

            <ul class="flex flex-wrap gap-x-2.5 gap-y-2 mb-7">
              <li class="btn-service selected">Дизайн</li>
              <li class="btn-service selected">Front-end</li>
              <li class="btn-service">Back-end</li>
              <li class="btn-service selected">SMM</li>
              <li class="btn-service selected">SEO</li>
              <li class="btn-service">Project management</li>
              <li class="btn-service">Mobile</li>
            </ul>

            <div class="mb-5">
              <div class="flex justify-between mb-2">
                <label for="project-description" class="label"
                  >Description</label
                >
                <span class="message-invalid invisible">Неверный формат</span>
              </div>
              <input
                type="text"
                name="project-description"
                id="project-description"
                class="field"
                placeholder="Add a project description"
                required
              />
            </div>

            <div class="relative">
              <div
                class="w-fit mb-2.5 flex items-center py-[5px] px-2.5 rounded-md bg-gray-100"
              >
                <div
                  class="w-[26px] h-[26px] rounded-md overflow-hidden mr-2.5"
                >
                  <img
                    src="../assets/img/file-upload-demo.jpg"
                    alt="file icon"
                    class="w-full h-full object-cover"
                  />
                </div>
                <p class="text-4 mr-2.5">Unnamed.png (2.33 Mb)</p>
                <v-button type="button"
                  ><v-icon
                    name="close"
                    width="17"
                    height="17"
                    viewBox="0 0 20 20"
                    class="hover:fill-blue-400"
                  ></v-icon>
                </v-button>
              </div>
              <div
                class="w-fit mb-2.5 flex items-center py-[5px] px-2.5 rounded-md bg-gray-100"
              >
                <div
                  class="w-[26px] h-[26px] rounded-md overflow-hidden mr-2.5"
                >
                  <img
                    src="../assets/img/icons/file.svg"
                    alt="file icon"
                    class="w-full h-full object-cover"
                  />
                </div>
                <p class="text-4 mr-2.5">File.pdf (2 Mb)</p>
                <v-button type="button"
                  ><v-icon
                    name="close"
                    width="17"
                    height="17"
                    viewBox="0 0 20 20"
                    class="hover:fill-blue-400"
                  ></v-icon>
                </v-button>
              </div>
              <input
                type="file"
                name="upload-file"
                id="upload-file"
                class="invisible opacity-0 absolute"
              />
              <label for="upload-file" class="upload-file"
                >Drag the file here</label
              >
            </div>
          </div>
          <div class="mb-24">
            <div class="flex justify-between items-center mb-5">
              <p class="text-1">Iterations</p>
              <v-button class="btn-add-1" type="button"
                >+ Add Iteration</v-button
              >
            </div>
            <table class="w-full">
              <thead>
                <tr class="border-b border-solid border-gray-100">
                  <td class="text-4 text-gray-400 pt-1.5 pb-[7px]">Name</td>
                  <td class="text-4 text-gray-400 pt-1.5 pb-[7px]">Amount</td>
                  <td class="text-4 text-gray-400 pt-1.5 pb-[7px]">Hours</td>
                  <td class="text-4 text-gray-400 pt-1.5 pb-[7px]">Dates</td>
                  <td class="text-4 text-gray-400 pt-1.5 pb-[7px]">Status</td>
                  <td class="text-4 text-gray-400 pt-1.5 pb-[7px]"></td>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-solid border-gray-100">
                  <td class="text-3 pt-1.5 pb-[7px]">Дизайн</td>
                  <td class="text-3 pt-1.5 pb-[7px]">300$</td>
                  <td class="text-3 pt-1.5 pb-[7px]">160</td>
                  <td class="text-3 pt-1.5 pb-[7px]">
                    16.04.2022 — 30.04.2022
                  </td>
                  <td class="pt-1.5 pb-[7px]">
                    <button class="status status-light-blue" type="button">
                      В работе
                    </button>
                  </td>
                  <td class="pt-1.5 pb-[7px]">
                    <v-button class="btn-more" type="button">
                      <v-icon
                        name="more"
                        viewBox="0 0 12 2"
                        width="12"
                        height="2"
                      ></v-icon>
                    </v-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex justify-between items-center">
            <v-button class="btn-primary w-48 h-13" disabled>Back</v-button>
            <v-button class="btn-primary w-48 h-13">Create</v-button>
          </div>
        </form>
      </v-card>

      <!-- Rates -->
      <v-card class="w-fit mt-10 p-8 relative">
        <v-button class="absolute top-5 right-5">
          <v-icon
            name="close"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            class="hover:fill-blue-400"
          ></v-icon>
        </v-button>

        <div class="mb-5 pb-5 border-b border-solid border-gray-200">
          <h2 class="mb-7">Rates</h2>
          <div class="grid grid-cols-[180px_130px_130px_25px] gap-x-5">
            <p class="text-3 text-gray-400">Name</p>
            <div class="flex items-center gap-x-1">
              <p class="text-3 text-gray-400">Out</p>
              <v-button type="button">
                <v-icon
                  name="error"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  class="hover:fill-blue-400"
                ></v-icon>
              </v-button>
            </div>
            <div class="flex items-center gap-x-1">
              <p class="text-3 text-gray-400">In</p>
              <v-button type="button">
                <v-icon
                  name="error"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  class="hover:fill-blue-400"
                ></v-icon>
              </v-button>
            </div>
          </div>
        </div>

        <div
          class="grid grid-cols-[180px_130px_130px_25px] gap-x-5 items-center mb-5"
        >
          <input type="text" class="field" placeholder="Rate name" />

          <div class="relative">
            <input
              type="text"
              name="amount"
              id="amount"
              class="field pr-20"
              placeholder=" "
              required
            />
            <div class="absolute bottom-0 right-0">
              <v-button class="btn-primary w-16 h-13" type="button"
                >USD</v-button
              >
              <ul class="hidden dropdown w-[166px] absolute">
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

          <div class="relative">
            <input
              type="text"
              name="amount"
              id="amount"
              class="field pr-20"
              placeholder=" "
              required
            />
            <div class="absolute bottom-0 right-0">
              <v-button class="btn-primary w-16 h-13" type="button"
                >USD</v-button
              >
              <ul class="hidden dropdown w-[166px] absolute">
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
        </div>

        <div
          class="grid grid-cols-[180px_130px_130px_25px] gap-x-5 items-center mb-5"
        >
          <input type="text" class="field" placeholder="Rate name" />

          <div class="relative">
            <input
              type="text"
              name="amount"
              id="amount"
              class="field pr-20"
              placeholder=" "
              required
            />
            <div class="absolute bottom-0 right-0">
              <v-button class="btn-primary w-16 h-13" type="button"
                >USD</v-button
              >
              <ul class="hidden dropdown w-[166px] absolute">
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

          <div class="relative">
            <input
              type="text"
              name="amount"
              id="amount"
              class="field pr-20"
              placeholder=" "
              required
            />
            <div class="absolute bottom-0 right-0">
              <v-button class="btn-primary w-16 h-13" type="button"
                >USD</v-button
              >
              <ul class="hidden dropdown w-[166px] absolute">
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

          <v-button type="button" class="w-[25px] h-[25px] bg-gray-100 rounded"
            ><v-icon
              name="close"
              width="19"
              height="19"
              viewBox="0 0 20 20"
              class="hover:fill-blue-400"
            ></v-icon>
          </v-button>
        </div>

        <v-button
          class="w-fit py-2 px-12 mb-10 border border-dashed border-gray-500 rounded-md text-4 text-gray-500 hover:border-blue-400 hover:text-blue-400 transition"
          >+ Add rate</v-button
        >

        <v-button class="btn-primary w-[200px] h-13">Save</v-button>
      </v-card>

      <!-- Rate -->
      <v-card class="w-fit mt-10 p-8 relative">
        <v-button class="absolute top-5 right-5">
          <v-icon
            name="close"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            class="hover:fill-blue-400"
          ></v-icon>
        </v-button>

        <div
          class="grid grid-cols-[168px_214px] gap-x-5 mb-7 pb-5 border-b border-solid border-gray-200"
        >
          <h2 class="mr-[134px]">Rate</h2>
          <div>
            <p class="text-3 text-gray-400 mb-1">Rate now</p>
            <p class="text-4 text-gray-400">
              <span class="text-1 mr-2">1 000 $</span>
              per month
            </p>
          </div>
        </div>

        <div
          class="grid grid-cols-[168px_214px] gap-x-5 gap-y-10 mb-10 pb-10 border-b border-solid border-gray-200"
        >
          <div>
            <p class="text-3 text-gray-400 mb-6">Fixed/Hour rate</p>
            <div class="btn-switch">
              <span></span>
            </div>
          </div>

          <div>
            <div class="flex justify-between mb-2">
              <label for="add-amount" class="label text-gray-400"
                >Add amount</label
              >
              <span class="message-invalid invisible">Неверный формат</span>
            </div>
            <div class="flex items-center">
              <div class="relative mr-3">
                <input
                  type="text"
                  name="add-amount"
                  id="add-amount"
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
              <p class="text-4 text-gray-400 whitespace-nowrap">/ Month</p>
            </div>
          </div>

          <v-button class="btn-primary w-[168px] h-13">Set</v-button>
        </div>

        <div class="pb-5 border-b border-solid border-gray-200">
          <p class="text-1">History</p>
        </div>

        <ul class="w-full mb-7">
          <li
            class="flex justify-between items-center gap-x-2 border-b border-solid border-gray-200"
          >
            <p class="py-2.5">10 000 $</p>
            <p class="py-2.5">31.02.22</p>
            <p class="py-2.5">Fixed rate</p>
          </li>
          <li
            class="flex justify-between items-center gap-x-2 border-b border-solid border-gray-200"
          >
            <p class="py-2.5">15 000 $</p>
            <p class="py-2.5">15.03.22</p>
            <p class="py-2.5">Fixed rate</p>
          </li>
          <li
            class="flex justify-between items-center gap-x-2 border-b border-solid border-gray-200"
          >
            <p class="py-2.5">12 000 $</p>
            <p class="py-2.5">24.11.22</p>
            <p class="py-2.5">Fixed rate</p>
          </li>
          <li
            class="flex justify-between items-center gap-x-2 border-b border-solid border-gray-200"
          >
            <p class="py-2.5">10 000 $</p>
            <p class="py-2.5">31.02.22</p>
            <p class="py-2.5">Fixed rate</p>
          </li>
          <li
            class="flex justify-between items-center gap-x-2 border-b border-solid border-gray-200"
          >
            <p class="py-2.5">15 000 $</p>
            <p class="py-2.5">15.03.22</p>
            <p class="py-2.5">Fixed rate</p>
          </li>
        </ul>

        <a href="#" class="link-3 text-gray-400 border-gray-400">Load more</a>
      </v-card>

      <!-- Client -->
      <v-card class="w-fit mt-10 p-8 relative">
        <v-button class="absolute top-5 right-5 p-1">
          <v-icon
            name="close"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            class="hover:fill-blue-400"
          ></v-icon>
        </v-button>

        <div
          class="grid grid-cols-[320px_180px] gap-x-7 mb-5 pb-5 border-b border-solid border-gray-200"
        >
          <div>
            <p class="text-4 text-gray-400 mb-1 ml-[34px]">Client</p>
            <div class="flex items-center">
              <v-button
                class="flex justify-center items-center p-0.5 bg-gray-100 rounded-md mr-2.5"
              >
                <v-icon
                  name="change"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  class="hover:fill-blue-400"
                ></v-icon>
              </v-button>
              <h2>Smith Andrew</h2>
            </div>
          </div>

          <div>
            <p class="text-4 text-gray-400 mb-1">Project</p>
            <p class="text-2">Webnauts</p>
          </div>
        </div>

        <div
          class="grid grid-cols-[320px_180px] gap-x-7 mb-5 pb-5 border-b border-solid border-gray-200"
        >
          <div>
            <p class="text-4 text-gray-400 mb-2.5">Contacts</p>
            <p class="text-3 mb-2">work.srbd.ids@gmail.com</p>
            <p class="text-3">+38 093 150 8776</p>
          </div>

          <div>
            <p class="text-4 text-gray-400 mb-2.5">Country</p>
            <div class="flex items-center">
              <img
                src="../assets/img/icons/flag-usa.svg"
                class="w-5 h-[13px] inline-block mr-2.5"
                alt="flag usa"
              />
              <p class="text-3">USA</p>
            </div>
          </div>
        </div>

        <div class="mb-5 pb-5 border-b border-solid border-gray-200">
          <p class="text-4 text-gray-400 mb-2.5">Comment</p>
          <textarea
            name="comment"
            id="comment"
            placeholder="Comment"
            class="field text-sm resize-none px-5 py-4 h-20"
          ></textarea>
        </div>

        <div class="flex justify-between items-center">
          <a href="#" class="link-3 text-gray-400">Other clients’ projects</a>
          <v-button class="btn-edit">
            <v-icon
              name="edit"
              width="15"
              height="15"
              viewBox="0 0 20 20"
            ></v-icon>
            <p class="link-3 text-gray-400">Edit</p>
          </v-button>
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
