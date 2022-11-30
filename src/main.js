import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

import './assets/sass/index.scss';



import firebaseConfig from '@/utilities/firebase.js'
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(firebaseApp);

const app = createApp(App)

app.use(router).use(store)

const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  app.component(baseComponentName, baseComponentConfig)
})

app.mount('#app')
