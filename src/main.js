import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'
import WhiskySelector from "./components/WhiskySelector";
import WhiskyList from "./components/WhiskyList";
import WhiskySheet from "./components/WhiskySheet";
import WhiskyByType from "./components/WhiskyByType";


Vue.config.productionTip = false
const routes = [
 // { path: '/', name:"app", component: App },
  { path: '/spin',name:"spin", component: WhiskySelector,
    props:
        route => ({

          whiskeys:route.params.whiskeys
        })},
  { path: '/select', name:"select",component: WhiskyList,
    props:
        route => ({

          whiskeys:route.params.whiskeys
        }) },
  { path: '/listing', name:"listing",component: WhiskySheet,
    props:
        route => ({

            whiskeys:route.params.whiskeys
        }) },
    { path: '/typelisting', name:"typelisting",component: WhiskyByType,
        props:
            route => ({

                whiskeys:route.params.whiskeys
            }) }

]
const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
