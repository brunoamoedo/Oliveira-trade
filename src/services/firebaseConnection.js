import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyAMKSBxPS4zf6Umg9Ph83PLgddFnb4w8CY",
    authDomain: "everymind-da2cc.firebaseapp.com",
    projectId: "everymind-da2cc",
    storageBucket: "everymind-da2cc.appspot.com",
    messagingSenderId: "254180498231",
    appId: "1:254180498231:web:8e837a192f627dc5ca98b2"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;