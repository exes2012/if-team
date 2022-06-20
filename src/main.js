import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/store";

import router from "./router";

//PrimeVue
import PrimeVue from 'primevue/config';

//Styles
import './assets/css/style.scss'


const app=createApp(App)

app.use(PrimeVue).use(store).use(router).mount('#app')
