import { ref, onMounted, onUnmounted } from "vue";

export function useScreenSize() {
  const screenSize = ref(null);

  function computeScreenSize() {
    if (window.innerWidth <= 639) {
      screenSize.value = "sm";
    }
    if (window.innerWidth > 639 && window.innerWidth <= 767) {
      screenSize.value = "md";
    }
    if (window.innerWidth > 767 && window.innerWidth <= 1023) {
      screenSize.value = "lg";
    }
    if (window.innerWidth > 1023 && window.innerWidth <= 1279) {
      screenSize.value = "xl";
    }
    if (window.innerWidth > 1279 && window.innerWidth <= 1535) {
      screenSize.value = "2xl";
    }
    if (window.innerWidth > 1535) {
      screenSize.value = "3xl";
    }
  }

  onMounted(() => {
    computeScreenSize();
    window.addEventListener("resize", computeScreenSize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", computeScreenSize);
  });

  return screenSize;
}
