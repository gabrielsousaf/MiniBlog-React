
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBJDcaD_2D5PCyXHud6JUZreHDl-yvEqP8",
  authDomain: "blog-d6852.firebaseapp.com",
  projectId: "blog-d6852",
  storageBucket: "blog-d6852.appspot.com",
  messagingSenderId: "933806412636",
  appId: "1:933806412636:web:f0a978e16c97bbe9b76799"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
