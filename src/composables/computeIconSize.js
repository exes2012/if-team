import { computed } from "vue";

export function useIconSize(iconName) {
  const iconWidth = computed(() => {
    if (iconName.value === "eyeOpen" || iconName.value === "eyeClose") {
      return "19";
    } else {
      return "20";
    }
  });
  const iconHeight = computed(() => {
    if (iconName.value === "eyeOpen") {
      return "16";
    } else if (iconName.value === "eyeClose") {
      return "11";
    } else {
      return "20";
    }
  });

  let showIconName = () => {
    console.log(iconName.value);

    console.log(iconWidth);
    console.log(iconHeight);
  };

  return { iconWidth, iconHeight, showIconName };
}
