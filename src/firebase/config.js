
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDMuJ7DBoFPyO6FxCJB-awO5fq7OlfE-kw",
  authDomain: "miniblog-react-c4eea.firebaseapp.com",
  databaseURL: "https://miniblog-react-c4eea-default-rtdb.firebaseio.com",
  projectId: "miniblog-react-c4eea",
  storageBucket: "miniblog-react-c4eea.appspot.com",
  messagingSenderId: "246687818862",
  appId: "1:246687818862:web:02d56048dfb5178e28b27f"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
