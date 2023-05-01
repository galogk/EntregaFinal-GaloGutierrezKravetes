import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3ir-CCdELtXFELuNcDQLNWC4LOhLtb8E",
  authDomain: "trekit-e2cec.firebaseapp.com",
  projectId: "trekit-e2cec",
  storageBucket: "trekit-e2cec.appspot.com",
  messagingSenderId: "880474701252",
  appId: "1:880474701252:web:0bb38377315b0a9e2d3891"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db