import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './index.css'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import { vfmPlugin } from 'vue-final-modal'


const app = createApp(App);
app.use(router)
app.use(Toast);
app.use(vfmPlugin)

app.mount('#app')