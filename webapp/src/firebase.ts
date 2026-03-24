import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC--Nk6bi8nZigka4HxHS9X7YvFT07tVsc",
  authDomain: "agentcost-saas.firebaseapp.com",
  projectId: "agentcost-saas",
  storageBucket: "agentcost-saas.firebasestorage.app",
  messagingSenderId: "482757958726",
  appId: "1:482757958726:web:e7863c53dd42841aa33e47"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;
