// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { GoogleAuthProvider, getAuth, signOut, getRedirectResult, onAuthStateChanged, signInWithCustomToken, signInWithRedirect, signInWithPopup, createUserWithEmailAndPassword, GithubAuthProvider, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzjNenZXk2gKXSu-6B6uW9DlpdoP06RUc",
    authDomain: "fudge-creations.firebaseapp.com",
    projectId: "fudge-creations",
    storageBucket: "fudge-creations.appspot.com",
    messagingSenderId: "949875472904",
    appId: "1:949875472904:web:65df5a963f56b0185a6fbd",
    measurementId: "G-EV3NG45468",
    cookies: {
        domain: '.fudgecreations.com',
    },
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth();

auth.useDeviceLanguage()


onAuthStateChanged(auth, (user) => {
    if (user) {
        alert("User is signed in")
    } else {
        alert("No user is signed in")
        const urlParams = new URLSearchParams(window.location.search);
        const authtoken = urlParams.get("authtoken");
        if (authtoken != null && authtoken != "") {
            signInWithCustomToken(auth, authToken)  
        } else { 
            window.location.href = "https://fudgecreations.com/auth/request.html?requestsite=pg"
        }
    }
}); 