import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


/**
 * Firebase config from firebase project settings
 */

const firebaseConfig = {
  apiKey: "AIzaSyCpC6TGFNsz57I62zkrB2Wx5Yku0YXpqHM",
  authDomain: "netflixclone-37742.firebaseapp.com",
  projectId: "netflixclone-37742",
  storageBucket: "netflixclone-37742.appspot.com",
  messagingSenderId: "511997467112",
  appId: "1:511997467112:web:f62a1b6e1402e43a322c5d"
}


/**
 * Firebase init
 */

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }