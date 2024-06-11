// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5oqY2sbWAk8mZoh4VRcnzaKJe7UidE4o",
  authDomain: "industrial-real-estate.firebaseapp.com",
  projectId: "industrial-real-estate",
  storageBucket: "industrial-real-estate.appspot.com",
  messagingSenderId: "250188424128",
  appId: "1:250188424128:web:910cc5166ff7de7c4c1e25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth