import * as firebase from 'firebase';
import "firebase/firestore"
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCBSmxYDAIx9ZUTAdbsjQcL5eevyLvd5Uc",
  authDomain: "signal-new.firebaseapp.com",
  projectId: "signal-new",
  storageBucket: "signal-new.appspot.com",
  messagingSenderId: "231502439407",
  appId: "1:231502439407:web:add7b936eba0cdfe7a4c1a"
};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };