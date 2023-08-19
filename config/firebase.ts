import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC5pWzuYcxHtUNCSXGscn0Fqq-4gCbS4AQ",
  authDomain: "authorization-c63f1.firebaseapp.com",
  projectId: "authorization-c63f1",
  storageBucket: "authorization-c63f1.appspot.com",
  messagingSenderId: "481803906457",
  appId: "1:481803906457:web:d5457fe77ffa912422f708",
  measurementId: "G-RT2M9X56KZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app