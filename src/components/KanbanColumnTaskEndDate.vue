<template>
  <div class="flex">
    <div class="flex items-center px-2.5 rounded-full h-[27px]" :class="dateStyle">
      <v-icon name="clock" width="13" height="13"/>
      <div class="text-xs ml-2.5">
        No deadline
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props =defineProps({
  date:String,
})

const dateStyle = computed(()=>{
  return 'expired'
})

</script>

<style scoped lang="css">

.normal{
  @apply bg-gray-100 text-gray-900 fill-gray-900
}

.expires{
  @apply bg-orange-100 text-orange-700 fill-orange-700 hover:bg-orange-700 hover:text-white hover:fill-white
}

.expired{
  @apply bg-red-100 text-red-700 fill-red-700 hover:bg-red-700 hover:text-white hover:fill-white
}

</style>