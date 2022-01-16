import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
// import 'vfonts/FiraSans.css'


import ElCreate from  './utils/elementUI'
import AntdCreate from  './utils/antdUI'
// import NaiveCreate from './utils/naiveUI'

import {router} from "./router"


const app = createApp(App)
ElCreate(app)
AntdCreate(app)
// app.use(NaiveCreate)
app.use(router)
app.mount('#app')
