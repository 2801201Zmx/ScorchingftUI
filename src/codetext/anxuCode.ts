import { createApp } from 'vue';
import App from './App.vue';
import { SFInput, SFCard } from 'scorchingftui';
import 'scorchingftui/style.css';

const app = createApp(App);
app.component('SFInput', SFInput);
app.component('SFCard', SFCard);
app.mount('#app');