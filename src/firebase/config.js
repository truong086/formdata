import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8hqwf0Hsq6QTtkVrT3-Dfh1VZjQrsIIo",
  authDomain: "projectform-2deb6.firebaseapp.com",
  projectId: "projectform-2deb6",
  storageBucket: "projectform-2deb6.firebasestorage.app",
  messagingSenderId: "716984855554",
  appId: "1:716984855554:web:9c74a4119c275c0f02cb1b",
  measurementId: "G-H3WB3RWEFR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
