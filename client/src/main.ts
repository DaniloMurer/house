import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        ripple: true
    },
});

app.mount("#app");
