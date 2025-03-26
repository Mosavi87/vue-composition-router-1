import { createApp } from 'vue'
import App from './App.vue'
import Home from './Pages/Home.vue'
import About from './Pages/About.vue'
import Posts from './Pages/Posts.vue'
import NotFound from './Pages/NotFound.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes =[
    {path: '/', component:Home},
    {path: '/about', component:About},
    {path: '/posts', component:Posts},
    {path: '/:PathMatch(.*)', component:NotFound},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
