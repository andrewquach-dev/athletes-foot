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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
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
