import { initializeApp } from "firebase/app"; //the line which we get when we create a new project
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAnbY7MXL3JUZwa14QxJmU4vDIHzCOc0hg",
  authDomain: "cybernautix.firebaseapp.com",
  projectId: "cybernautix",
  storageBucket: "cybernautix.appspot.com",
  messagingSenderId: "1018018853789",
  appId: "1:1018018853789:web:bbf36a3af9c55e96167574"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
