import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/styles.css"
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})
const pinia = createPinia();

createApp(App).use(vuetify).use(pinia).mount('#app')
