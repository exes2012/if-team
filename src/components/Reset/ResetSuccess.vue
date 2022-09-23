<template>
  <div class="text-2xl max-w-[420px] mt-16">Письмо для восстановления пароля было отправлено на вашу электронную почту.</div>
  <div class="text-gray-500 text-base max-w-[400px] mt-7">Перейдите по ссылке в письме, чтобы восстановить пароль. </div>
  <v-button class="btn-primary w-[420px] h-[60px] mt-12" @click="goToLogin">На главную</v-button>
</template>

<script>
export default {
  name: "ResetSuccess",
  methods:{
    goToLogin(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>