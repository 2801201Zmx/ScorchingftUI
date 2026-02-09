import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";

import ScorchingftUI from "@/scorchingft/index";
import "@/scorchingft/style/style.css";

import ScorchingftIcon from '@/scorchingftIcon/index';

import "@/assets/css/style.css";

const app = createApp(App);

app.use(router);
app.use(ScorchingftUI);
app.use(ScorchingftIcon);

app.mount("#app");