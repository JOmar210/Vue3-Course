<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// Importaciones de Vue-Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(router).use(VueAxios, axios).mount('#app');
=======
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
// Importaciones de Vue-AXIOS
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
>>>>>>> ce2bf962e4480bf18a61b978aac458e0bb67145d
