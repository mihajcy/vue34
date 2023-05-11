import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import firebase from 'firebase/app';
import router from './components/router.js'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .mount('#app')
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAzf9wvYOr7Udr4cvsLJFbhGxeo95VLA8",
  authDomain: "vueweb-a5f63.firebaseapp.com",
  projectId: "vueweb-a5f63",
  storageBucket: "vueweb-a5f63.appspot.com",
  messagingSenderId: "89839863525",
  appId: "1:89839863525:web:50dac8bf717f99b301f60c",
  measurementId: "G-55Y7WGZE4G"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    
    