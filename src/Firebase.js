// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCqpRbrgIYGgSrXZkrfv6vlq-Ls2tp9KT0',
  authDomain: 'collegeio-5a4b3.firebaseapp.com',
  projectId: 'collegeio-5a4b3',
  storageBucket: 'collegeio-5a4b3.appspot.com',
  messagingSenderId: '1012374548227',
  appId: '1:1012374548227:web:e5262db9977ebb3df7c336',
  measurementId: 'G-WXM5Y3GKPP',
};
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
