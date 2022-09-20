<template>
  <div
      class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100"
  >
    <div class="text-1 mt-9">
      A confirmation letter has been sent to your email.
    </div>
    <div class="text-2 text-gray-400 mt-7">
      Follow the link in the email to activate your profile.
    </div>
    <v-button class="btn-primary w-full h-15 mt-20" @click="signUp"
    >Sign up again
    </v-button
    >
  </div>
</template>

<script>

export default {
  methods: {
    signUp() {
      this.$router.push({name: "login"})
    }
  }
}
</script>

<style scoped></style>
