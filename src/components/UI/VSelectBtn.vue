<template>
  <div class="relative">
    <v-button
      class="btn-primary w-10 h-5"
      type="button"
      @click="changeState"
      @keyup.esc="hideSelect"
    >
      <div v-if="isSelected">123{{ selected }}</div>
    </v-button>
    <v-select-dropdown width="166" v-if="isActive">
      <dropdown-item
        v-for="currency in currencies"
        :icon="currency.icon"
        :value="currency.name"
        :symbol="currency.symbol"
        @click="selectOption(currency)"
      />
    </v-select-dropdown>
  </div>
</template>

<script>
import DropdownItem from "../DropdownItemCurrency.vue";
import VSelectDropdown from "./VSelectDropdown.vue";
import changeSelectComponentStateMixin from "../../mixins/changeSelectComponentStateMixin";

export default {
  name: "VSelectBtn",
  components: {
    DropdownItem,
    VSelectDropdown,
  },
  mixins: [changeSelectComponentStateMixin],
  data() {
    return {
      currencies: [
        {
          icon: "flagUA",
          name: "UAH",
          symbol: "₴",
        },
        {
          icon: "flagUSA",
          name: "USD",
          symbol: "$",
        },
        {
          icon: "flagEUR",
          name: "EUR",
          symbol: "€",
        },
        {
          icon: "flagGBP",
          name: "GBP",
          symbol: "£",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
