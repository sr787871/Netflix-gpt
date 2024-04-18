// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAzDZdiQfrPR1lCbm2xboCLm078OYWzyY",
  authDomain: "netflixgpt-ca984.firebaseapp.com",
  projectId: "netflixgpt-ca984",
  storageBucket: "netflixgpt-ca984.appspot.com",
  messagingSenderId: "80947236648",
  appId: "1:80947236648:web:ddaa5ef781236d46184a1d",
  measurementId: "G-VP0PYCC9QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();