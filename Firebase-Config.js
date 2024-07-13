// Import the functions you need from the Firebase SDKs
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwMGq8N4jI-AIAT0Fn3Bm6rulJOTL5qu8",
    authDomain: "devsign-web-bf756.firebaseapp.com",
    projectId: "devsign-web-bf756",
    storageBucket: "devsign-web-bf756.appspot.com",
    messagingSenderId: "195668307611",
    appId: "1:195668307611:web:34335e02e89a07f8f9203e",
    measurementId: "G-1MWQKE6Q89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore(app);
const Auth = getAuth(app);

// Reference to the 'contacts' collection
const collectionRef = collection(database, 'contacts');

// Sign In with Google
const googleProvider = new GoogleAuthProvider();

// Function to handle form submission
const handleSubmit = async (event) => {
    event.preventDefault();

    const Name = document.getElementById('name').value;
    const Email = document.getElementById('email').value;
    const Number = document.getElementById('number').value;
    const Message = document.getElementById('message').value;

    try {
        await addDoc(collectionRef, {
            Name: Name,
            Email: Email,
            Number: Number,
            Message: Message,
            timestamp: new Date()
        });
        alert('Your message has been submitted successfully');
        event.target.reset();
    } catch (err) {
        alert('Error: ' + err.message);
    }
};

// Add event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const connectForm = document.getElementById('connect-form');
    if (connectForm) {
        connectForm.addEventListener('submit', handleSubmit);
    } else {
        console.error('Element with ID "connect-form" not found.');
    }

    // Sign In with Email and Password
    const signInForm = document.getElementById('signin-form');
    if (signInForm) {
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const Email = document.getElementById('email').value;
            const Password = document.getElementById('password').value;

            signIn(Email, Password)
                .then((userCredential) => {
                    console.log("User Sign In: ", userCredential.user);
                    alert('Sign In Successfully!');
                    signInForm.reset();
                })
                .catch((err) => {
                    alert(err.message);
                    console.log("Error: ", err.message);
                });
        });
    } else {
        console.error('Element with ID "signin-form" not found.');
    }

    // Sign In with Google
    const googleSignIn = document.getElementById('google-signin');
    if (googleSignIn) {
        googleSignIn.addEventListener('click', (e) => {
            signInWithPopup(Auth, googleProvider)
                .then((response) => {
                    console.log("User Sign In: ", response.user);
                    alert('Sign In with Google Successfully!');
                })
                .catch((err) => {
                    alert(err.message);
                    console.log("Error: ", err.message);
                });
        });
    } else {
        console.error('Element with ID "google-signin" not found.');
    }
});

// Sign In Authentication
const signIn = (Email, Password) => {
    return createUserWithEmailAndPassword(Auth, Email, Password);
}
