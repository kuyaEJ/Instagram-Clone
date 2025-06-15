import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjl8oIJSMbrcE8PBugplv13rdrWRKTOr8",
  authDomain: "instagram-clone-a6461.firebaseapp.com",
  projectId: "instagram-clone-a6461",
  storageBucket: "instagram-clone-a6461.firebasestorage.app",
  messagingSenderId: "939951785910",
  appId: "1:939951785910:web:49de14e81198f7955de317",
  measurementId: "G-2M6H8NTNB7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app);
// const storage = getStorage(app);

export { app, auth, firestore };