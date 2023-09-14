
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAVs5XvQIyn_Owg6E5HRwu4POL45F1NYXw",
  authDomain: "miniblog-90a31.firebaseapp.com",
  projectId: "miniblog-90a31",
  storageBucket: "miniblog-90a31.appspot.com",
  messagingSenderId: "53511476285",
  appId: "1:53511476285:web:c05cc3aebb4fe9e2640654"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
