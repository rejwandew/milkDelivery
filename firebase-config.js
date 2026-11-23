// Firebase Configuration for PureDrop Milk Delivery
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAX9XrBuxDe--SdegCg46FeZIAauZwYfvk",
  authDomain: "puredrop-dairy-6b4a9.firebaseapp.com",
  projectId: "puredrop-dairy-6b4a9",
  storageBucket: "puredrop-dairy-6b4a9.firebasestorage.app",
  messagingSenderId: "825921705426",
  appId: "1:825921705426:web:25df4cbd3836c935a0a40b",
  measurementId: "G-SYRSEKKCMV"
};

// Check if actual credentials have been configured
window.isFirebaseConfigured = function() {
  return window.FIREBASE_CONFIG && 
         window.FIREBASE_CONFIG.apiKey && 
         window.FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY";
};
