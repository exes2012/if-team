<template>
  <div class="flex flex-col">
    <div class="text-gray-500 text-xs flex mb-2.5">{{props.timeUsed}} of {{props.timePlan}} hours</div>
    <div class="w-full h-[5px] bg-blue-100 rounded-full mb-3 relative">
      <div class="absolute h-[5px] bg-blue-500 rounded-full" :style="{width:progress}"></div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props=defineProps({
  timePlan: Number,
  timeUsed: Number
})

const progress = computed(()=>{
  return (props.timeUsed/props.timePlan)*100 + '%'
})

</script>

<style scoped>

</style>