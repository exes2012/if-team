//Main
import {createApp} from "vue"
import {createI18n} from 'vue-i18n'
import App from "./App.vue"
import store from "./store/store"
import router from "./router"

//Mixins
import removeErrors from "./mixins/globalMixins"

//Validation
import {useVuelidate} from "@vuelidate/core"

//PrimeVue (Table)
import PrimeVue from "primevue/config"

//DatePicker
import Datepicker from "@vuepic/vue-datepicker"
import "@vuepic/vue-datepicker/dist/main.css"

//Styles
import "./assets/css/style.scss"

//Components
import VIcon from "./components/UI/VIcon.vue"
import VCard from "./components/UI/VCard.vue"
import VDivideHorizontal from "./components/UI/VDivideHorizontal.vue"
import VContainer from "./components/UI/VContainer.vue"
import VCheckbox from "./components/UI/VCheckbox.vue"
import VButton from "./components/UI/VButton.vue"
import VMain from "./components/UI/VMain.vue"
import TheMain from "./components/TheMain.vue"
import VInput from "./components/UI/VInput.vue"
import VSelect from "./components/UI/VSelect.vue"
import {CircleStencil} from "vue-advanced-cropper"

const app = createApp(App)

const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {
            reg: {
                registerOr: 'Register or',
                login: 'login',
                data: 'Data',
                mainInformation: 'Main information',
                completeRegistration: 'Complete registration',
            },
            login: {
                login: 'Login or',
                register: 'register'
            },
            input: {
                phone: 'Phone',
                password: 'Password',
                language: 'Language',
                chooseAnOption: 'Choose an option'
            },
            button: {
                next: 'Next'
            }
        },
        ru: {
            reg: {
                registerOr: 'Регистрация или',
                login: 'вход',
                data: 'Данные',
                mainInformation: 'Основная информация',
                completeRegistration: 'Завершить регистрацию',
            },
            login: {
                login: 'Войдите или',
                register: 'зарегистрируйтесь'
            },
            input: {
                phone: 'Телефон',
                password: 'Пароль',
                language: 'Язык',
                chooseAnOption: 'Выберите из списка'
            },
            button: {
                next: 'Дальше'
            }
        },
        uk: {
            reg: {
                registerOr: 'Реєстрація або',
                login: 'вхід',
                data: 'Дані',
                mainInformation: 'Основна інформація',
                completeRegistration: 'Повна реєстрація',
            },
            login: {
                login: 'Увійдіть або',
                register: 'зареєструйтесь'
            },
            input: {
                phone: 'Телефон',
                password: 'Пароль',
                language: 'Мова',
                chooseAnOption: 'Виберіть зі списку'
            },
            button: {
                next: 'Далі'
            }
        }
    }
})

app.component("v-icon", VIcon)
app.component("v-card", VCard)
app.component("the-main", TheMain)
app.component("v-main", VMain)
app.component("v-divider-horizontal", VDivideHorizontal)
app.component("v-container", VContainer)
app.component("v-checkbox", VCheckbox)
app.component("v-input", VInput)
app.component("v-select", VSelect)
app.component("v-button", VButton)
app.component("Datepicker", Datepicker)
app.component("circle-stencil", CircleStencil)

app.mixin(removeErrors)

app.use(i18n)
app.use(PrimeVue)
app.use(store)
app.use(router)
app.use(useVuelidate)
app.mount("#app")
