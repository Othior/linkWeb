import firebase from 'firebase'
import 'firebase/firebase-firestore'

let firebaseConfig = {
  apiKey: "AIzaSyChkepSXXahG3xUsdUlvqv8rMYFXRSsjus",
  authDomain: "linkweb-a00cb.firebaseapp.com",
  projectId: "linkweb-a00cb",
  storageBucket: "linkweb-a00cb.appspot.com",
  messagingSenderId: "371797842160",
  appId: "1:371797842160:web:e26bf193dff1a2009eca35"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore()

export { db, fire }