import { createApp } from 'vue'
import vRipple from './directives/vRipple';
import './styles.css';
import App from './App.vue'

const app = createApp(App)

app.directive('ripple', vRipple)

app.mount('#app')
