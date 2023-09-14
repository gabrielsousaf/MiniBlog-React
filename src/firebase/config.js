
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA6521ViC8ngf4Zh4G3RBLaF3l5KkTKkY8",
  authDomain: "mini-blog-react-bd56c.firebaseapp.com",
  projectId: "mini-blog-react-bd56c",
  storageBucket: "mini-blog-react-bd56c.appspot.com",
  messagingSenderId: "444107994884",
  appId: "1:444107994884:web:67d8867a6bcdf3bbbec251"
}; 

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
