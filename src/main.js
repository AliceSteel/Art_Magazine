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



createApp(App).use(router).use(store).mount('#app')
