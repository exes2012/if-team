<template>
  <aside class="max-w-[412px] w-full pt-14 pr-5 pb-10 pl-10">
    <p class="text-2">
      Здесь может быть
      <br />
      какая-то справочная инфа
    </p>
  </aside>
  <main class="p-28 w-full">
    <h1 class="mb-5">If.Team</h1>
    <p class="text-1 mb-12">
      Register or
      <a href="#" class="link-1">login</a>
    </p>
    <div class="mb-2 flex items-center">
      <div
        class="w-10 h-10 bg-blue-400 rounded-full flex justify-center items-center"
      >
        <p class="icon-check text-white"></p>
      </div>
      <div class="w-[106px] h-px bg-gray-200"></div>
      <div
        class="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center"
      >
        <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
      </div>
      <div class="w-[106px] h-px bg-gray-200"></div>
      <div
        class="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center"
      ></div>
    </div>
    <div class="mb-8 flex items-start">
      <p class="text-4 text-blue-400 mr-[80px]">
        Main <br />
        information
      </p>
      <p class="text-4 text-blue-400 mr-[120px]">Data</p>
      <p class="text-4 text-gray-500">
        Completing <br />
        registration
      </p>
    </div>
    <form
      action="#"
      method="post"
      class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100 grid-cols-2 gap-x-5 hidden"
    >
      <div class="mb-7">
        <div class="flex justify-between">
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
        <div class="flex justify-between">
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
          <svg width="18" height="18">
            <use xlink:href="../assets/img/sprite.svg#calendar"></use>
          </svg>
        </button>
      </div>

      <div class="relative mb-12">
        <div class="flex justify-between">
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
          <svg width="12" height="8">
            <use xlink:href="../assets/img/sprite.svg#btn-arrow"></use>
          </svg>
        </button>
      </div>

      <div class="relative mb-12">
        <div class="flex justify-between">
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
          <svg width="12" height="8">
            <use xlink:href="../assets/img/sprite.svg#btn-arrow"></use>
          </svg>
        </button>
      </div>

      <button class="btn-primary w-full h-15">Next</button>
    </form>
    <form
      action="#"
      method="post"
      class="max-w-[445px] w-full pt-12 border-t-2 border-solid border-gray-100 hidden"
    >
      <div class="mb-7">
        <div class="flex justify-between">
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
        <div class="flex justify-between">
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
        <div class="flex justify-between">
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
          <svg width="20" height="16">
            <use xlink:href="../assets/img/sprite.svg#password-show"></use>
          </svg>
        </button>
      </div>
      <button class="btn-primary w-full h-15">Next</button>
    </form>
    <form
      action="#"
      method="post"
      class="max-w-[445px] w-full pt-20 border-t-2 border-solid border-gray-100"
    >
      <div class="mb-20 relative flex items-center">
        <input
          type="file"
          name="file"
          id="file"
          class="invisible opacity-0 absolute"
          required
        />
        <label for="file" class="upload-photo"> </label>
      </div>

      <button class="btn-primary w-full h-15">Complete the registration</button>
    </form>
  </main>
</template>

<script>
export default {
  name: "ViewRegister",
};
</script>

<style scoped></style>
