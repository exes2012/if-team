import { email, helpers, required } from "@vuelidate/validators";

export function useValidationRules() {
  const phoneRegex = helpers.regex(/^\+380\d{3}\d{2}\d{2}\d{2}$/);
  const rules = {
    email: {
      required: helpers.withMessage("Поле не может быть пустым", required),
      email: helpers.withMessage("Неверный формат электронной почты", email),
    },
    phone: {
      required: helpers.withMessage("Поле не может быть пустым", required),
      phoneRegex: helpers.withMessage(
        "Неверный формат номера телефона",
        phoneRegex
      ),
    },
    password: {
      required: helpers.withMessage("Поле не может быть пустым", required),
    },
  };
  return rules;
}
