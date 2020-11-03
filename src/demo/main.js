import { createApp } from 'vue'
import { store } from './store'
import Demo from './Demo.vue'

// Vue.config.productionTip = false

/* eslint-disable no-new */
const app = createApp(Demo)

app.use(store)

app.mount('#app')
