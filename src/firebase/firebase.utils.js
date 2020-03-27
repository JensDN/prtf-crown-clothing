import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyDqIN_h3hmy2oS9d4rqgTERl9G71NDxtgo",
    authDomain: "prtf-webshop.firebaseapp.com",
    databaseURL: "https://prtf-webshop.firebaseio.com",
    projectId: "prtf-webshop",
    storageBucket: "prtf-webshop.appspot.com",
    messagingSenderId: "159480930064",
    appId: "1:159480930064:web:10c49b6d2fb0b4071d4f95",
    measurementId: "G-V1QBH3YE7C"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt :'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
