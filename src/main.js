import { createApp } from 'vue'
import App from './App.vue'
// import VueMap from 'vue3-google-map';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia';
// import "bootstrap"
// import "bootstrap/dist/css/bootstrap.min.css"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import store from './store'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import Vue3Notification from '@kyvg/vue3-notification'
import CKEditor from '@ckeditor/ckeditor5-vue'

const app = createApp(App)
app.config.globalProperties.hostname = "https://localhost:44346"
const pinia = createPinia();
app.use(pinia);
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(store)
app.use(Toast)
app.use(CKEditor)
app.use(VueAxios, axios)
app.use(Vue3Notification)
app.mount('#app')
