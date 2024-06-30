import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura';
import {createPinia} from "pinia";

const pinia = createPinia();
const app = createApp(App);
app.config.globalProperties.apiBasePath = window.location.host.includes('localhost')
    ? 'http://localhost:3000/api'
    : 'https://house-api.churrer.xyz/api';
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        ripple: true
    },
});
app.use(pinia);
app.mount("#app");
