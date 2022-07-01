<template>
  <div class="container flex">
    <aside
      class="max-w-[392px] w-full pt-28 pr-5 pb-10 border-r-2 border-solid border-gray-100 lg:max-w-full lg:border-r-0 lg:border-t-2 lg:py-20 lg:px-0"
    >
      <p class="text-2 max-w-[230px] mb-10">
        Здесь может быть какая-то справочная инфа
      </p>
    </aside>
    <main class="p-28 w-full">
      <h1 class="mb-5">If.Team</h1>
      <p class="text-1 mb-12">
        Register or
        <a href="#" class="link-1">login</a>
      </p>
      <v-stepper :steps="steps" />
      <!-- Step 1 -->
      <form
        action="#"
        method="post"
        class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100 grid grid-cols-2 gap-x-5"
      >
        <div class="mb-7">
          <div class="flex justify-between mb-2">
            <label for="name" class="label">Full name</label>
            <span class="message-invalid invisible">Неверный формат</span>
          </div>
          <input
            type="text"
            name="name"
            id="name"
            class="field"
            placeholder=" "
            required
          />
        </div>

        <div class="relative mb-7">
          <div class="flex justify-between mb-2">
            <label for="birth" class="label">Date of birth</label>
            <span class="message-invalid invisible">Неверный формат</span>
          </div>
          <input
            type="text"
            name="birth"
            id="birth"
            class="field"
            placeholder=" "
            required
          />
          <button class="btn-field" type="button">
            <p class="icon-calendar"></p>
          </button>
        </div>

        <div class="relative mb-12">
          <div class="flex justify-between mb-2">
            <label for="role" class="label">Role</label>
            <span class="message-invalid invisible">Неверный формат</span>
          </div>
          <input
            type="text"
            name="role"
            id="role"
            class="field"
            placeholder=" "
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

        <div class="relative mb-12">
          <div class="flex justify-between mb-2">
            <label for="department" class="label">Department</label>
            <span class="message-invalid invisible">Неверный формат</span>
          </div>
          <input
            type="text"
            name="department"
            id="department"
            class="field"
            placeholder=" "
            required
          />
          <button class="btn-field" type="button">
            <p class="icon-arrow-down"></p>
          </button>

          <ul class="dropdown">
            <li>Копирайтинг</li>
            <li>SMM</li>
            <li>Back-end</li>
            <li>Front-end</li>
          </ul>
        </div>

        <v-button class="btn-primary w-full h-15">Next</v-button>
      </form>
      <!-- Step 2 -->
      <form
        action="#"
        method="post"
        class="hidden max-w-[445px] w-full pt-12 border-t-2 border-solid border-gray-100"
      >
        <div class="mb-7">
          <div class="flex justify-between mb-2">
            <label for="email" class="label">E-mail</label>
            <span class="message-invalid invisible">Неверный формат</span>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            class="field"
            placeholder="Your e-mail"
            required
          />
        </div>
        <div class="mb-7">
          <div class="flex justify-between mb-2">
            <label for="phone" class="label">Phone</label>
            <span class="message-invalid invisible">Неверный формат</span>
          </div>
          <input
            type="tel"
            name="phone"
            id="phone"
            class="field"
            placeholder="+38 000 00 00 000"
            required
          />
        </div>
        <div class="relative mb-14">
          <div class="flex justify-between mb-2">
            <label for="password" class="label">Password</label>
            <span class="message-invalid invisible">Не менее 6 символов</span>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            class="field field-password"
            placeholder=" "
            required
          />
          <button class="btn-field" type="button">
            <p class="icon-password-show"></p>
          </button>
        </div>
        <button class="btn-primary w-full h-15">Next</button>
      </form>
      <!-- Step 3 -->
      <form
        action="#"
        method="post"
        class="hidden max-w-[445px] w-full pt-20 border-t-2 border-solid border-gray-100"
      >
        <div class="mb-20 relative flex items-center">
          <div class="relative mr-10">
            <input
              type="file"
              name="file"
              id="file"
              class="invisible opacity-0 absolute"
              required
            />
            <label for="file" class="upload-photo active">
              <img
                src="../assets/img/user-photo.jpg"
                class="w-full h-full object-cover"
                alt="user photo"
              />
              <p class="icon-camera upload-photo-icon"></p>
            </label>
            <button class="upload-photo-btn" type="button">
              <p class="icon-close text-xs leading-0"></p>
            </button>
          </div>
          <div class="flex flex-col justify-center">
            <p class="text-3 max-w-[220px] mb-5">
              Just a little bit left. Add a photo, and complete your
              registration
            </p>
            <p class="text-4 text-gray-400">
              No more than 5 Mb.
              <br />
              (jpg, png, jpeg)
            </p>
          </div>
        </div>
        <button class="btn-primary w-full h-15">
          Complete the registration
        </button>
      </form>
      <!-- Complete -->
      <div
        class="hidden max-w-[445px] w-full pt-20 border-t-2 border-solid border-gray-100"
      >
        <p class="text-1 max-w-[340px] mb-8">
          A confirmation letter has been sent to your email.
        </p>
        <p class="text-2 text-gray-400 mb-20">
          Follow the link in the email to activate your profile.
        </p>
        <v-button class="btn-primary w-full h-15">Sign up again</v-button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import VStepper from "../components/VStepper.vue";

const steps = reactive([
  { number: 1, label: "Data" },
  { number: 2, label: "Main information" },
  { number: 3, label: "Complete registration" },
]);
</script>

<style scoped></style>
