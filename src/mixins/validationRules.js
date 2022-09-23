import {email, helpers, required} from "@vuelidate/validators";

export default {
    data() {
        return {
            regex: {
                date: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
            },
            rules: {
                email: {
                    required: helpers.withMessage("Поле не может быть пустым", required),
                    email: helpers.withMessage("Неверный формат электронной почты", email),
                },
                fullName: {
                    required: helpers.withMessage("Поле не может быть пустым", required),
                    fullNameRegex: helpers.withMessage("Введите имя и фамилию, не больше 15 символов", helpers.regex(/^\p{L}{2,15}\s\p{L}{2,15}$/u))
                },
                phone: {
                    phoneRegex: helpers.withMessage("Неверный формат номера телефона", helpers.regex(/^\+380\d{3}\d{2}\d{2}\d{2}$/)),
                    required: helpers.withMessage("Поле не может быть пустым", required)
                },
                password: {
                    passwordRegex: helpers.withMessage('Пароль должен содержать буквы большого, малого регистра и спецсимволы', helpers.regex(/^(?=.*\d)(?=.*[ !@#$%^&*()_\-+=\[\]\{\}'";:\\|/?\.>,<])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/)),
                    required: helpers.withMessage("Поле не может быть пустым", required)
                }
            }
        }
    },
}