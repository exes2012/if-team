import { computed } from "vue";

export function useFormatDate(date) {
  const format = (date) => {
    const day = computed(() => {
      if (date.getDate() < 10) {
        return "0" + date.getDate();
      } else {
        return date.getDate();
      }
    });
    const month = computed(() => {
      if (date.getMonth() + 1 < 10) {
        return "0" + (date.getMonth() + 1);
      } else {
        return date.getMonth() + 1;
      }
    });
    const year = date.getFullYear();
    return `${day.value}.${month.value}.${year}`;
  };

  return { format };
}
