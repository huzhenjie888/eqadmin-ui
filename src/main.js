import { createApp } from 'vue'
import App from './App.vue'
import eqadminUI from "./components/eqadmin-ui/index.js";
const app = createApp(App);
app.use(eqadminUI);
app.mount('#app')
