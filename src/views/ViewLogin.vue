<template>
  <main class="flex min-h-screen lg:h-auto lg:justify-center">
    <div
      class="max-w-[600px] w-full pt-[140px] px-[90px] pb-[90px] 2xl:max-w-[400px] 2xl:py-16 2xl:px-10 lg:max-w-[600px] md:px-[15px] md:pb-20"
    >
      <h1 class="mb-5 md:mb-3">If.Team</h1>
      <p class="text-1 mb-20 md:mb-16">
        Войдите или
        <router-link to="/register" class="link-1">зарегистрируйтесь</router-link>
      </p>
      <form action="#" method="post">
        <div class="mb-7 md:mb-5">
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
        <div class="relative mb-2 md:mb-1">
          <div class="flex justify-between">
            <label for="password" class="label">Password</label>
            <a href="#" class="link-2">Забыли пароль?</a>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            class="field field-password"
            placeholder=" "
            required
          />
          <button class="btn-password" type="button">
            <svg width="20" height="16">
              <use xlink:href="img/sprite.svg#password-show"></use>
            </svg>
          </button>
        </div>
        <p class="text-3 mb-8 text-red-800 invisible md:mb-6">
          Неверный логин и пароль
        </p>
        <button class="btn-primary w-full h-15 mb-10 md:mb-7">Войти</button>
        <p class="text-3 text-center mb-10 md:mb-7">или войдите с помощью</p>
        <button class="btn-secondary w-full h-15">
          <svg width="20" height="20">
            <use xlink:href="img/sprite.svg#google"></use>
          </svg>
          Google
        </button>
      </form>
    </div>
    <div
      class="w-full flex flex-col items-center pt-[140px] px-[90px] pb-[90px] bg-gray-100 2xl:pt-20 2xl:justify-center lg:hidden"
    >
      <img
        class="max-w-xl w-full mb-[85px]"
        src="../assets/img/logo-big.svg"
        alt="webnauts logo"
      />
      <img
        class="max-w-[1000px] w-full"
        src="../assets/img/team.svg"
        alt="team"
      />
    </div>
  </main>
</template>

<script>
export default {
  name: "ViewLogin",
};
</script>

<style scoped></style>
