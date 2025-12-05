// Firebase Configuration - Shared across all pages
const firebaseConfig = {
  apiKey: "AIzaSyAQbZyXpjglxKXQZtMHP7pya1ExpRE_naI",
  authDomain: "fantasyfootballrpg-b65dd.firebaseapp.com",
  projectId: "fantasyfootballrpg-b65dd",
  storageBucket: "fantasyfootballrpg-b65dd.firebasestorage.app",
  messagingSenderId: "949512801226",
  appId: "1:949512801226:web:53f71d1033b014c87fdd33"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Helper: Get current user
async function getCurrentUser() {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    });
  });
}

// Helper: Get user data from Firestore
async function getUserData(userId) {
  const doc = await db.collection('users').doc(userId).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

// Helper: Get league data
async function getLeagueData(leagueCode) {
  const doc = await db.collection('leagues').doc(leagueCode).get();
  return doc.exists ? { code: doc.id, ...doc.data() } : null;
}

// Helper: Check auth and redirect if needed
async function requireAuth(redirectTo = 'auth.html') {
  const user = await getCurrentUser();
  if (!user) {
    window.location.href = redirectTo;
    return null;
  }
  return user;
}

// Helper: Logout
async function logout() {
  try {
    await auth.signOut();
    window.location.href = 'auth.html';
  } catch (error) {
    console.error('Logout error:', error);
  }
}

console.log('Firebase initialized successfully');
