<template>
  <div class="relative">
    <v-button
      class="btn-primary w-10 h-5"
      type="button"
      @click="changeState"
      @keyup.esc="hideSelect"
    >
      {{ selected }}
    </v-button>
    <v-select-dropdown width="166" v-if="isActive">
      <dropdown-item
        v-for="currency in currencies"
        :icon="currency.icon"
        :value="currency.value"
        :symbol="currency.symbol"
        @click="selectOption(currency)"
      />
    </v-select-dropdown>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import DropdownItem from "./DropdownItemCurrency.vue";
import VSelectDropdown from "./VSelectDropdown.vue";

const props = defineProps({
  selected: Object,
  options: {
    type: Array,
    default() {
      return [];
    },
  },
});

const currencies = [
  {
    icon: "flagUA",
    value: "UAH",
    symbol: "₴",
  },
  {
    icon: "flagUSA",
    value: "USD",
    symbol: "$",
  },
  {
    icon: "flagEUR",
    value: "EUR",
    symbol: "€",
  },
  {
    icon: "flagGBP",
    value: "GBP",
    symbol: "£",
  },
];

const emit = defineEmits(["select"]);

const isActive = ref(false);

const changeState = () => {
  isActive.value = !isActive.value;
};

const hideSelect = () => {
  isActive.value = false;
};

const selected = ref("USD");

const selectOption = (option) => {
  emit("select", option);
  selected.value = option.value;
  hideSelect();
};

onMounted(() => {
  document.addEventListener("click", hideSelect, true);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", hideSelect);
});
</script>

<style scoped></style>
