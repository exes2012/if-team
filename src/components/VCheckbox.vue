<template>
  <label class="container"
    ><input
      class="checkbox"
      type="checkbox"
      v-model="value"
      value="vuex"
      @click="console.log(1)"
    />
    <span class="checkmark"></span>
    {{ props.label }}
  </label>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
});

const value = ref("");
</script>

<style scoped lang="css">
.container {
  @apply relative cursor-pointer flex items-center;
}

.container input {
  @apply absolute opacity-0 cursor-pointer h-0 w-0;
}

.container input:checked ~ .checkmark {
  @apply bg-blue-400;
}

.checkmark {
  @apply absolute top-1 left-0 h-4 w-4 bg-gray-100 rounded-[3px] hover:border hover:border-blue-700;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: flex;
}

.container .checkmark:after {
  left: 5px;
  top: 1.5px;
  width: 6px;
  height: 9px;
  border: solid white;
  border-width: 0 1px 1px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.container .checkmark:hover:after {
  left: 4px;
  top: 0.5px;
}
</style>
