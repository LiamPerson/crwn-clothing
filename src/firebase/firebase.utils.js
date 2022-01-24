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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('Error creating user', error.message);
      }
    }

    return userRef;
  }

  Firebase.initializeApp(config);

  export const auth = Firebase.auth();
  export const firestore = Firebase.firestore();

  const provider = new Firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default Firebase;