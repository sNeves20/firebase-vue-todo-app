import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAWFIQIjS1m4GbqNf5Y5oKsfAupuQSnW-M",
    authDomain: "vue-fire-todo-f7a5e.firebaseapp.com",
    databaseURL: "https://vue-fire-todo-f7a5e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vue-fire-todo-f7a5e",
    storageBucket: "vue-fire-todo-f7a5e.appspot.com",
    messagingSenderId: "264062899821",
    appId: "1:264062899821:web:d2649dd9dd67223f92d164"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
