export default {
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    options: {
      type: Array,
      default: [],
    },
    color: {
      type: String,
      default: "gray",
    },
    selected: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Choose an option",
    },
  },
  emits: ["select"],
  methods: {
    changeState() {
      this.isActive = !this.isActive;
    },
    hideSelect() {
      this.isActive = false;
    },
    selectOption(option) {
      this.$emit("select", option);
      this.selected = option.name;
      this.hideSelect();
    },
  },
  computed: {
    isSelected() {
      return this.selected != "";
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect, true);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.hideSelect);
  },
};
