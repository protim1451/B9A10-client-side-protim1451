// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC__743xIFlCXWXojjnUUBx006g45PX1uw",
  authDomain: "b9a10-client-side-protim1451.firebaseapp.com",
  projectId: "b9a10-client-side-protim1451",
  storageBucket: "b9a10-client-side-protim1451.appspot.com",
  messagingSenderId: "678733375018",
  appId: "1:678733375018:web:fab7fd7b17416a0fbe8553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;