import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8BzIhA39AtihjECaTrsCcFBqRPch94R4",
  authDomain: "dropbox-clone-14dad.firebaseapp.com",
  projectId: "dropbox-clone-14dad",
  storageBucket: "dropbox-clone-14dad.appspot.com",
  messagingSenderId: "492883593835",
  appId: "1:492883593835:web:cc397ab1ac8545fb3a7f2e",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
