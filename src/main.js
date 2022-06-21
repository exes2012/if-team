import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/store";
import router from "./router";

//PrimeVue
import PrimeVue from 'primevue/config';

//Styles
import './assets/css/style.scss'
//Components
import VIcon from "./components/VIcon.vue";
import VCard from "./components/VCard.vue";
import VContainer from "./components/VContainer.vue";
import VCheckbox from "./components/VCheckbox.vue";


const app=createApp(App)

app.component('v-icon',VIcon)
app.component('v-card',VCard)
app.component('v-container',VContainer)
app.component('v-checkbox',VCheckbox)

app.use(PrimeVue).use(store).use(router).mount('#app')
