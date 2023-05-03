// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOALRqsUcfil9_W5iwy9kPJURxyW2_D_U",
    authDomain: "cookiter-client-site.firebaseapp.com",
    projectId: "cookiter-client-site",
    storageBucket: "cookiter-client-site.appspot.com",
    messagingSenderId: "11297559635",
    appId: "1:11297559635:web:d41018e52f982d3e2ca2a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;