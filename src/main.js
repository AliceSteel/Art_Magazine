import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { createHead } from '@vueuse/head'


import './assets/sass/index.scss';

//import firebaseConfig from '@/utilities/firebase.js'
  
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB-BAxnUmE9Y-3Xzju6kOCLfpH70wQVxOo",
    authDomain: "art-magazine-2da1b.firebaseapp.com",
    projectId: "art-magazine-2da1b",
    storageBucket: "art-magazine-2da1b.appspot.com",
    messagingSenderId: "723347185477",
    appId: "1:723347185477:web:de6f809463ac2fbb56a82c"
};
  
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(firebaseApp);

const app = createApp(App)
const head = createHead()

app.use(router).use(store).use(head)

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
