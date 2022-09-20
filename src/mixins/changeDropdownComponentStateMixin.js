export default {
  data() {
    return {
      isActive: false,
    };
  },
  emits: ["select"],
  methods: {
    changeState() {
      this.isActive = !this.isActive;
    },
    hideSelect() {
      this.isActive = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect, true);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.hideSelect);
  },
};
