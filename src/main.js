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

//Languages
import en from './locales/en.json'
import ru from './locales/ru.json'
import uk from './locales/uk.json'

const app = createApp(App)

function loadLocaleMessages() {
    const locales = [
        en, ru, uk
    ]
    const messages = {}
    locales.forEach(lang => {
        const key = Object.keys(lang)
        messages[key] = lang[key]
    })
    return messages
}

const i18n = createI18n({
    locale: 'en',
    messages: loadLocaleMessages()
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
