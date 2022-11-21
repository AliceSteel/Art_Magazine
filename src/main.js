import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'

import firebaseConfig from '@/utilities/firebase'
  
  // Initialize Firebase
initializeApp(firebaseConfig);

import './assets/sass/index.scss';

createApp(App).use(router).mount('#app')
