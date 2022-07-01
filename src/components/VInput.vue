<template>
  <div class="mb-7 md:mb-5">
    <div class="flex justify-between">
      <label class="label mb-2.5">{{ props.label }}</label>
      <slot />
    </div>
    <div class="flex items-center relative">
      <input
        class="field"
        :placeholder="props.placeholder"
        :type="props.type"
        v-model="inputValue"
        @blur="$emit('onBlur')"
      />
      <v-icon
        :width="iconWidth"
        :height="iconHeight"
        v-if="haveIcon"
        :name="props.icon"
        class="absolute right-3 cursor-pointer fill-gray-500"
        @click="$emit('iconClick')"
      />
    </div>
  </div>
</template>

<script setup>
import { useVModelWrapper } from "../composables/vModelWrapper";
import { computed, watch, ref, reactive, toRefs, toRef } from "vue";
import { useIconSize } from "../composables/computeIconSize";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  icon: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue", "iconClick", "onBlur"]);

const inputValue = useVModelWrapper(props, emit, "modelValue");

const haveIcon = computed(() => {
  return props.icon !== "";
});

const icon = toRef(props, "icon");

const { iconWidth, iconHeight, showIconName } = useIconSize(icon);
</script>

<style scoped></style>
