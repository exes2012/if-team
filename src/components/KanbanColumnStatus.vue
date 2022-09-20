<template>
  <div class="flex">
    <div class="column-status" :class="color">
      {{ status }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: String,
    color: String
  }
}
</script>

<style scoped>
.column-status {
  @apply h-9 flex items-center rounded font-sans font-medium text-lg pl-2.5 pr-2.5 mb-4;
}

.aqua {
  @apply bg-aqua-100 text-aqua-500
}

.green {
  @apply bg-green-100 text-green-500
}

.orange {
  @apply bg-orange-100 text-orange-500
}

.purple {
  @apply bg-purple-100 text-purple-500
}

.red {
  @apply bg-red-100 text-red-500
}
</style>