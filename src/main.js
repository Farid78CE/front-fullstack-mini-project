import { createApp  } from "vue";
import App from "./App.vue";
import store from "@/store/store.js";
import route from "@/router/route.js";
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App);
app.use(route).use (store).use(VueAxios, axios);
app.mount("#app");