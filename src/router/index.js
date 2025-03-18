import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import AssociazioneWOM from '../views/AssociazioneWom.vue'
import Archive from '../views/Archive.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/privacy-policy', name: 'Privacy Policy', component: PrivacyPolicy },
  { path: '/associazione-wom', name: 'Associazione Wom', component: AssociazioneWOM },
  { path: '/archive', name: 'Wom Archive', component: Archive}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
