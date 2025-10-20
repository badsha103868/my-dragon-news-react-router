// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0hI6AFUm-DbzKjJpita4gOnVgjORv3JA",
  authDomain: "dragon-news-breakings.firebaseapp.com",
  projectId: "dragon-news-breakings",
  storageBucket: "dragon-news-breakings.firebasestorage.app",
  messagingSenderId: "552509493889",
  appId: "1:552509493889:web:2619db896201321fe2b380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


