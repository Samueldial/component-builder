import { createApp } from "vue"
import { autoComponentsRegister } from "./autoImport"
import router from "./router"
import App from "./App.vue"

import "./assets/css/fonts.css"
import "./assets/css/tailwind.css"

const app = createApp(App)

autoComponentsRegister(app.component)

app.use(router).mount("#app")
