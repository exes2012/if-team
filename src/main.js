import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";

//PrimeVue
import PrimeVue from 'primevue/config';

//Styles
import './assets/css/style.scss'


createApp(App).use(PrimeVue).use(router).mount('#app')
