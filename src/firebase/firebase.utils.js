import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDWkcbZE9LFYASjVQGPc2GM_mx1JqvYtR4",
    authDomain: "crwn-db-5ec69.firebaseapp.com",
    projectId: "crwn-db-5ec69",
    storageBucket: "crwn-db-5ec69.appspot.com",
    messagingSenderId: "733839165157",
    appId: "1:733839165157:web:606dd97fa2725b0472760c",
    measurementId: "G-TDE1SS52EK"
  };

  Firebase.initializeApp(config);

  export const auth = Firebase.auth();
  export const firestore = Firebase.firestore();

  const provider = new Firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default Firebase;