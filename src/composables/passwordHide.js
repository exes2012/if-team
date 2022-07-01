import { computed, ref } from "vue";

export function usePasswordShow() {
  let hidePassword = ref(true);
  const passwordFieldIcon = computed(() =>
    hidePassword.value ? "eyeOpen" : "eyeClose"
  );
  const passwordFieldType = computed(() =>
    hidePassword.value ? "password" : "text"
  );

  const showPassword = () => {
    hidePassword.value = !hidePassword.value;
  };

  return { hidePassword, passwordFieldIcon, passwordFieldType, showPassword };
}
