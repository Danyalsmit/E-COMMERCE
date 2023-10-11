
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBE81UhRvGTmII4llILGwwvO5IodcpuhmY",
  authDomain: "e-commerce-ca8a1.firebaseapp.com",
  projectId: "e-commerce-ca8a1",
  storageBucket: "e-commerce-ca8a1.appspot.com",
  messagingSenderId: "722628735202",
  appId: "1:722628735202:web:855ca49a333a05e847aebb"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;