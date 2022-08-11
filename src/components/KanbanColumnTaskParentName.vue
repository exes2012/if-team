<template>
<div class="text-4 text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
  {{props.title}}
</div>
</template>

<script setup>
const props=defineProps({
  title:String
})
</script>

<style scoped>

</style>