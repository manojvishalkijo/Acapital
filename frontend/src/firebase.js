import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz3h0deoTSirKtfKgGKblkAfHOvcBVbuI",
  authDomain: "testmode-cc3c4.firebaseapp.com",
  projectId: "testmode-cc3c4",
  storageBucket: "testmode-cc3c4.firebasestorage.app",
  messagingSenderId: "484939514257",
  appId: "1:484939514257:web:48185feec564f4e5005a30",
  measurementId: "G-1Q3KFY5NMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);