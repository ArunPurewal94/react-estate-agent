// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY6pUWE4-_UjfkJWfCZVCmdIlz4U-m4pw",
    authDomain: "estate-agents-8c180.firebaseapp.com",
    projectId: "estate-agents-8c180",
    storageBucket: "estate-agents-8c180.appspot.com",
    messagingSenderId: "798548402757",
    appId: "1:798548402757:web:ab580bcdf52c669e86792c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
