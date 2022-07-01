<template>
  <div class="flex items-center justify-between relative mt-12 mb-20 mr-20 z-0">
    <div class="absolute h-0.5 bg-blue-100 left-0 right-0 mx-auto">
      <div
        class="absolute left-0 h-full bg-blue-400 transition-transform ease-out"
        :style="{ width: stepperProgress }"
      ></div>
    </div>
    <div
      class="flex flex-col items-center relative"
      v-for="item in props.steps"
    >
      <div
        class="register-progress bg-blue-100"
        v-if="props.step === item.number"
      >
        <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
      </div>
      <div
        class="register-progress bg-blue-400"
        v-else-if="props.step > item.number"
      >
        <v-icon name="success" width="28" height="28" class="fill-white" />
      </div>
      <div class="register-progress bg-blue-100" v-else></div>
      <span class="step-label">{{ item.label }}</span>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  steps: {
    type: Array,
  },
  step: Number,
});

const stepperProgress = computed(() => {
  if (props.step <= props.steps.length) {
    return (100 / (props.steps.length - 1)) * (props.step - 1) + "%";
  } else {
    return "100%";
  }
});
</script>

<style scoped>
.step-label {
  @apply absolute text-4 left-0 top-14 w-20;
}
</style>
