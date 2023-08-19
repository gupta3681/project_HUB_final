// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Firebase authentication functions
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// For Google sign-in account creation
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmIaTCWkLVakhk-7aG6bVciNDmF6fUGzo",
  authDomain: "projecthub-0.firebaseapp.com",
  projectId: "projecthub-0",
  storageBucket: "projecthub-0.appspot.com",
  messagingSenderId: "278036986824",
  appId: "1:278036986824:web:1ac33ebe7faa7852ff9efd",
  measurementId: "G-XFEK5BLP9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const handleGoogleSignIn = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // signInWithPopup(auth, provider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  // });

  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export { auth, handleGoogleSignIn };