<template>
  <div class="flex items-center"><div class="text-2 text-gray-900 ">Название какой-то роли очень длинное даже супер присупер</div>
    <div class="flex items-center ml-auto">
      <v-icon name="editRole" width="14" height="14" class="edit-icon"/>
      <v-icon name="deleteRole" width="12" height="12" class="edit-icon"/>
    </div>
  </div>
  <v-divider-horizontal class="mt-6"/>
</template>

<script>
export default {
  name: "RoleListItem",
  components: {}

}
</script>

<style scoped>
.edit-icon{
  @apply ml-5 cursor-pointer fill-gray-500
}

</style>