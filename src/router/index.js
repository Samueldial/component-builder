import { createRouter, createWebHistory } from "vue-router"
import Login from "../views/Login/index.vue"

const routes = [{
  path: "/login",
  component: Login
}]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
