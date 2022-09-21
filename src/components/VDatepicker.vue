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

<script>
import { useFormatDate } from "../composables/formatDatepicker";

export default {
  name: "VDatepicker",
  data() {
    return {
      date: new Date(),
      textInputOptions: {
        format: "dd.MM.yyyy",
      },
      monthNames: [
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
      ],
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  emits: ["selectDate"],
  methods: {
    getDate(dateVal) {
      const newDate = new Date(dateVal);
      return `${newDate.getDate()} ${this.monthNames[newDate.getMonth()]}`;
    },
    selectDate() {
      dp.value.selectDate();
      this.$emit("selectDate", this.formatDate);
      console.log(this.formatDate.value);
    },
    padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    },
    closeMenu() {
      dp.closeMenu();
    },
  },
  computed: {
    monthName() {
      return this.monthNames[this.date.getMonth()];
    },
    formatDate() {
      return [
        this.date.getFullYear(),
        this.padTo2Digits(this.date.getMonth() + 1),
        this.padTo2Digits(this.date.getDate()),
      ].join("-");
    },
  },
};

// const props = defineProps({
//   label: {
//     type: String,
//     default: "",
//   },
// });
//
// const emit = defineEmits(['selectDate'])
//
// const date = ref(new Date());
// const dp = ref();
//
// const { format } = useFormatDate(date);
//
// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
//
// const getDate = (dateVal) => {
//   const newDate = new Date(dateVal);
//
//   return `${newDate.getDate()} ${monthNames[newDate.getMonth()]}`;
// };
//
// const monthName = computed(() => {
//   return monthNames[date.value.getMonth()];
// });
//
// const selectDate = () => {
//   dp.value.selectDate();
//   emit('selectDate', formatDate.value);
//   console.log(formatDate.value)
// };
//
// const padTo2Digits = (num)=> {
//   return num.toString().padStart(2, '0');
// }
//
// const formatDate = computed(()=>{
//   return [
//     date.value.getFullYear(),
//     padTo2Digits(date.value.getMonth() + 1),
//     padTo2Digits(date.value.getDate()),
//   ].join('-');
// })
//
// const closeMenu = () => {
//   dp.value.closeMenu();
// };
//
// const textInputOptions = ref({
//   format: "dd.MM.yyyy",
// });
</script>

<style scoped></style>
