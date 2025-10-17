// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvj3zxu4er4zbhjKo_QUSZUk6LY-dRzjc",
  authDomain: "unu-store.firebaseapp.com",
  projectId: "unu-store",
  storageBucket: "unu-store.firebasestorage.app",
  messagingSenderId: "618395710825",
  appId: "1:618395710825:web:3558fb78a3ce0eb1a4f9f8",
  measurementId: "G-EVDPW41YBD"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);

// Auth
const auth = getAuth(app);

// Auto sign in anonymously
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("✅ Signed in anonymously with UID:", user.uid);
  } else {
    signInAnonymously(auth)
      .then(() => console.log("🔑 Signed in anonymously"))
      .catch(err => console.error("Auth error:", err));
  }
});

export { auth };
