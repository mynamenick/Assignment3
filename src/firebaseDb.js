import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDgiNPV19ZCNWMeaWAhJAAYbIlUm_aGhN0",
    authDomain: "my-subscriptions-3b9c3.firebaseapp.com",
    projectId: "my-subscriptions-3b9c3",
    storageBucket: "my-subscriptions-3b9c3.appspot.com",
    messagingSenderId: "437181671640",
    appId: "1:437181671640:web:e61547b4ba4a923fbacfad"
  };

  const db = firebase.initializeApp(firebaseConfig);
  export default db.firestore();
  
