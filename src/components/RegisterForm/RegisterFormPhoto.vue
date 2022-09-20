<template>
  <form
      method="post"
      class="max-w-[910px] w-full pt-12 border-t-2 border-solid border-gray-100"
  >
    <div class="flex">
      <avatar-drop-zone @drop.prevent="drop"/>
      <div class="flex flex-col justify-center ml-10">
        <div class="text-3 mb-2.5">Just a little bit left. Add a photo, and complete your registration</div>
        <div class="text-4 text-gray-400 mt-2.5">No more than 5 Mb</div>
        <div class="text-4 text-gray-400">(jpg, png, jpeg)</div>
      </div>
    </div>
    <input-error v-if="errors.length" :errors="errors" class="flex-col mt-10"/>
    <v-button class="btn-primary w-full h-15 mt-12" @click.prevent="register" :disabled="disabled"
    >Complete the registration
    </v-button
    >
  </form>
</template>

<script>
import InputError from "../InputError.vue";
import AvatarDropZone from "../AvatarDropZone.vue"

export default {
  components: {
    InputError,
    AvatarDropZone
  },
  data() {
    return {
      avatar: {
        value: '',
      },
      disabled: false,
      errors: []
    }
  },
  methods: {
    drop(e) {
      this.avatar.value = e.dataTransfer.files[0]
      this.setPhotoToCrop()
      this.openRegisterPhotoCrop()
    },
    setPhotoToCrop() {
      this.$store.commit('userAuth/SET_REGISTER_PHOTO', this.avatar)
    },
    openRegisterPhotoCrop() {
      this.$store.commit("userAuth/SET_REGISTER_PHOTO_CROP_STATE", true)
    },
    register() {
      this.disabled = true
      const formData = new FormData()
      formData.append('phone', this.$store.state.userAuth.phone)
      formData.append('email', this.$store.state.userAuth.email)
      formData.append('password', this.$store.state.userAuth.password)
      formData.append('full_name', this.$store.state.userAuth.full_name)
      formData.append('date_of_birth', this.$store.state.userAuth.date_of_birth)
      if (this.$store.state.userAuth.avatar) {
        formData.append('avatar', this.$store.state.userAuth.avatar)
      }
      this.$store.dispatch("userAuth/register", formData)
          .then(res => {
            console.log(res)
          })
          .catch(err => {

            if (Object.keys(err).length) {
              for (const key in err) {
                if (err[key].constraints && err[key].constraints.length) {
                  err[key].constraints.forEach(error => {
                    this.errors.push(error)
                  })
                }
              }
            }

          })
          .finally(() => {
            this.disabled = false
          })
    }
  }
}

</script>

<style scoped></style>
