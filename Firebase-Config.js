// Import the functions you need from the Firebase SDKs
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

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

// Reference to the 'contacts' collection
const collectionRef = collection(database, 'contacts');

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
})