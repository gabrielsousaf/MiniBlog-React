
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyApfbanoDffUAsblVkF8X7KBkYW1lKaZIY",
  authDomain: "miniblog-1fd68.firebaseapp.com",
  projectId: "miniblog-1fd68",
  storageBucket: "miniblog-1fd68.appspot.com",
  messagingSenderId: "298490087052",
  appId: "1:298490087052:web:27bb207eeb0ce047a71da9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };