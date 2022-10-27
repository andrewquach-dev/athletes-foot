import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAAy2z44nMjeYag92-Gf4D-_R2LPkpR-9s",
  authDomain: "athletes-foot-db.firebaseapp.com",
  databaseURL: "https://athletes-foot-db-default-rtdb.firebaseio.com/",
  projectId: "athletes-foot-db",
  storageBucket: "athletes-foot-db.appspot.com",
  messagingSenderId: "23343560394",
  appId: "1:23343560394:web:09060521a4a425591ba633",
  measurementId: "G-DXEKTD087R",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
