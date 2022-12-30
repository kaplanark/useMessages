import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import useMessages from "@messages";

const app = createApp(App)
const messages = useMessages();
app.provide('messages', messages);
app.mount('#app');
