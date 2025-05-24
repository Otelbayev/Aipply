// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA652g8MgocyHEioi9FM5PRiHUJuOg1-fE",
  authDomain: "aippy-4c675.firebaseapp.com",
  projectId: "aippy-4c675",
  storageBucket: "aippy-4c675.firebasestorage.app",
  messagingSenderId: "839053364283",
  appId: "1:839053364283:web:14f76357145dfc0877e01e",
  measurementId: "G-Q6BY005QDF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
