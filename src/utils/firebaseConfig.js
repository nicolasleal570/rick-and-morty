import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAaPqjXktHR4jvTdFTImjdjrsy88RcJlzk',
  authDomain: 'prepa-rick-morty.firebaseapp.com',
  projectId: 'prepa-rick-morty',
  storageBucket: 'prepa-rick-morty.appspot.com',
  messagingSenderId: '373980828759',
  appId: '1:373980828759:web:40d66e1474e3f71805bf12',
  measurementId: 'G-57CHDZLNG3',
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
