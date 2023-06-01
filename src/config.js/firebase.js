import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCVdsFvi807C0_tU11hmJdFGkjD-8mlJR0",
  authDomain: "achou-app-364dd.firebaseapp.com",
  projectId: "achou-app-364dd",
  storageBucket: "achou-app-364dd.appspot.com",
  messagingSenderId: "326418681859",
  appId: "1:326418681859:web:da28a03817f5093d4a3e36"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;