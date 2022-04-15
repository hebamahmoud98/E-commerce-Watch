import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDGfYhUzyCzy2PmdtQ1D6jxoS27yU2ZNrE",
  authDomain: "ms14-e-commerce-app.firebaseapp.com",
  projectId: "ms14-e-commerce-app",
  storageBucket: "ms14-e-commerce-app.appspot.com",
  messagingSenderId: "391818756538",
  appId: "1:391818756538:web:6ac4537471977ccabd1d83",
  measurementId: "G-ZD2MPKEWF5",
});

export const auth = app.auth();
export default app;
