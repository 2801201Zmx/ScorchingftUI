import * as ScorchingftPlusIcons from '@ScorchingftPlus/icons-vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ScorchingftPlusIcons)) {
  app.component(key, component);
}