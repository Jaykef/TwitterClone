import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  // YOUR CONFIG HERE
  apiKey: "AIzaSyAS99udaRZ82ljTp91_Q0ndE38owPPs-PY",
  authDomain: "qwitter-8dd69.firebaseapp.com",
  projectId: "qwitter-8dd69",
  storageBucket: "qwitter-8dd69.appspot.com",
  messagingSenderId: "986306252325",
  appId: "1:986306252325:web:91a4de24de1cbd8edff9cc",
  measurementId: "G-WCVWETTKWV"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db