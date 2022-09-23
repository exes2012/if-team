<template>
  <form method="post" @submit.prevent="resetPassword">
    <div class="text-1 max-w-[445px] mt-4">Введите email, который Вы использовали при регистрации для восстановления пароля</div>
    <v-input class="max-w-[420px] mt-14" label="E-mail"/>
    <v-button class="btn-primary w-[420px] h-[60px] mt-14">Далее</v-button>
  </form>
</template>

<script>
export default {
  name: "ResetForm",
  methods:{
    resetPassword(){
      this.$router.push('/reset/success')
    }
  }
}
</script>

<style scoped>

</style>