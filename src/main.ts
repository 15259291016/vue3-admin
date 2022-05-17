import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // pinia
import router from './router';
// 引入全局样式
import './styles/index.scss';

const app = createApp(App);

app.use(router).use(createPinia()).mount('#app');
