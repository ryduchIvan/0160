import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import {useToast} from 'vue-toast-notification';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
const app = createApp(App)

app.use(router)
app.use(ToastPlugin);
app.mount('#app')

export const $toast = useToast();