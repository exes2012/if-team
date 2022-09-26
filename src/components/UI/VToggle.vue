<template>
  <div class="flex flex-col">
    <div class="label mb-6">{{ label }}</div>
    <div
      class="flex items-center bg-gray-100 rounded-full w-[42px] h-[25px] p-[1px]"
      @click="toggle"
    >
      <div
        class="w-[23px] h-[23px] rounded-full bg-gray-500 transform transition-transform"
        :class="{ ball: modelValue }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VToggle",
  props: {
    modelValue: {
      type: Boolean,
    },
    label: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    toggle() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style scoped>
.ball {
  @apply translate-x-[19px] bg-blue-400;
}
</style>
