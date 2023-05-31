import { createApp } from '../node_modules/vue/dist/vue.esm-bundler';
import App from './App.vue'
import router from './router'

import '../src/styles/styles.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
