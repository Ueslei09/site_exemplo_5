
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 1. Importar o CSS e o JS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 2. Importar os Ícones do Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
