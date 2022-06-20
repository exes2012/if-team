<template>
  <div class="container flex">
    <aside
      class="max-w-[392px] w-full pt-28 pr-5 pb-10 pl-10 border-r-2 border-solid border-gray-100"
    >
      <p class="text-2">
        Здесь может быть
        <br />
        какая-то справочная инфа
      </p>
    </aside>
    <main class="p-28 w-full">
      <!-- Step 1 -->
      <div class="hidden">
        <h1 class="mb-4">Восстановление пароля</h1>
        <p class="text-1 mb-24">
          Введите email, который Вы использовали при регистрации для
          восстановления пароля
        </p>
        <form action="#" method="post" class="max-w-[420px] w-full">
          <div class="mb-12">
            <div class="flex justify-between">
              <label for="email" class="label">E-mail</label>
              <span class="message-invalid invisible">Неверный формат</span>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              class="field"
              placeholder=" "
              required
            />
          </div>
          <button class="btn-primary w-full h-15">Войти</button>
        </form>
      </div>
      <!-- Step 2 -->
      <div class="hidden">
        <h1 class="mb-24">Восстановление пароля</h1>
        <div class="max-w-[420px] w-full">
          <p class="text-1 mb-7">
            Письмо для восстановления пароля было отправлено на вашу электронную
            почту.
          </p>
          <p class="text-2 max-w-[300px] mb-12 text-gray-500">
            Перейдите по ссылке в письме, чтобы восстановить пароль.
          </p>
          <button class="btn-primary w-full h-15">Войти</button>
        </div>
      </div>
      <!-- Step 3 -->
      <div class="">
        <h1 class="mb-3">Придумайте новый пароль</h1>
        <p class="text-1 mb-24">Заполните поля ниже</p>
        <form action="#" method="post" class="max-w-[420px] w-full">
          <div class="relative mb-7">
            <div class="flex justify-between">
              <label for="new-password" class="label">New password</label>
              <span class="message-invalid invisible">Не менее 6 символов</span>
            </div>
            <input
              type="password"
              name="new-password"
              id="new-password"
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
          <div class="relative mb-10">
            <div class="flex justify-between">
              <label for="repeat-password" class="label">Repeat password</label>
              <span class="message-invalid invisible">Не менее 6 символов</span>
            </div>
            <input
              type="password"
              name="repeat-password"
              id="repeat-password"
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
          <div class="passwords-message match">
            <p class="icon-error"></p>
            <p class="icon-check"></p>
            <p class="text-3">Passwords match</p>
          </div>
          <button class="btn-primary w-full h-15">Save password</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "ViewReset",
};
</script>

<style scoped></style>
