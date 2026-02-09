import { createApp } from 'vue';
import App from './App.vue';
import ScorchingftComponents from 'scorchingftui';
import 'scorchingftui/style.css';

const app = createApp(App);
app.use(ScorchingftComponents);
app.mount('#app');