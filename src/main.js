//Main
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./router";
//Validation
import { useVuelidate } from "@vuelidate/core";
//PrimeVue (Table)
import PrimeVue from "primevue/config";
//DatePicker
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
//Styles
import "./assets/css/style.scss";
//Components
import VIcon from "./components/VIcon.vue";
import VCard from "./components/VCard.vue";
import VDivideHorizontal from "./components/VDivideHorizontal.vue";
import VContainer from "./components/VContainer.vue";
import VCheckbox from "./components/VCheckbox.vue";
import VButton from "./components/VButton.vue";
import VMain from "./components/VMain.vue";
import TheMain from "./components/TheMain.vue";
import VInput from "./components/VInput.vue";
import VSelect from "./components/VSelect.vue";
import VModalCard from "./components/VModalCard.vue";
import { CircleStencil } from "vue-advanced-cropper";

const app = createApp(App);

app.component("v-icon", VIcon);
app.component("v-card", VCard);
app.component("the-main", TheMain);
app.component("v-main", VMain);
app.component("v-divider-horizontal", VDivideHorizontal);
app.component("v-container", VContainer);
app.component("v-checkbox", VCheckbox);
app.component("v-input", VInput);
app.component("v-select", VSelect);
app.component("v-button", VButton);
app.component("v-modal-card", VModalCard);
app.component("Datepicker", Datepicker);
app.component("circle-stencil", CircleStencil);

app.use(PrimeVue).use(store).use(router).use(useVuelidate).mount("#app");
