// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

let app;
let db;
let useMock = false;

// Initialize Firebase only if API Key is present
if (firebaseConfig.apiKey) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Firebase initialized successfully.");
  } catch (error) {
    console.error("Firebase initialization error:", error);
    useMock = true;
  }
} else {
  console.warn("Firebase config is missing. Running in DEMO MODE with LocalStorage fallback.");
  useMock = true;
}

/**
 * Submits an inquiry to Firestore or LocalStorage if in demo mode.
 * @param {Object} inquiryData - The inquiry details (name, email, message, gemId).
 * @returns {Promise<boolean>} True if successful.
 */
export const submitInquiry = async (inquiryData) => {
  if (useMock) {
    // Demo Mode: Save to LocalStorage
    return new Promise((resolve) => {
      setTimeout(() => {
        const inquiries = JSON.parse(localStorage.getItem('gem_inquiries') || '[]');
        inquiries.push({
          ...inquiryData,
          timestamp: new Date().toISOString(),
          id: 'mock_' + Math.random().toString(36).substr(2, 9)
        });
        localStorage.setItem('gem_inquiries', JSON.stringify(inquiries));
        console.log("DEMO MODE: Inquiry saved to LocalStorage", inquiryData);
        resolve(true);
      }, 800); // Simulate network delay
    });
  }

  // Real Firebase execution
  try {
    const docRef = await addDoc(collection(db, "inquiries"), {
      ...inquiryData,
      createdAt: serverTimestamp(),
    });
    console.log("Inquiry written with ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Error adding inquiry: ", e);
    throw e;
  }
};
