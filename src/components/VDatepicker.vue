<template>
  <label class="label">{{ props.label }}</label>
  <Datepicker
    v-model="date"
    :enableTimePicker="false"
    :format="format"
    :clearable="false"
    class="mt-2.5"
    ref="dp"
    :textInput="true"
    :textInputOptions="textInputOptions"
  >
    <template #input-icon>
      <v-icon name="calendar" class="mr-3"></v-icon>
    </template>
    <template #action-preview="{ value }">
      <div class="flex justify-between">
        <p>{{ props.label }}</p>
        <p class="font-medium text-blue-400 text-sm">{{ getDate(value) }}</p>
      </div>
    </template>
    <template #action-select>
      <div class="flex justify-end">
        <p
          class="font-medium text-gray-500 text-sm cursor-pointer mr-2"
          @click="closeMenu"
        >
          Cancel
        </p>
        <p
          class="font-medium text-blue-400 text-sm cursor-pointer"
          @click="selectDate"
        >
          Select
        </p>
      </div>
    </template>
  </Datepicker>
</template>

<script setup>
import { computed, ref } from "vue";
import { useFormatDate } from "../composables/formatDatepicker";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
});

const date = ref(new Date());
const dp = ref();

const { format } = useFormatDate(date);

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDate = (dateVal) => {
  const newDate = new Date(dateVal);

  return `${newDate.getDate()} ${monthNames[newDate.getMonth()]}`;
};

const monthName = computed(() => {
  return monthNames[date.value.getMonth()];
});

const selectDate = () => {
  dp.value.selectDate();
};

const closeMenu = () => {
  dp.value.closeMenu();
};

const textInputOptions = ref({
  format: "dd.MM.yyyy",
});
</script>

<style scoped></style>
