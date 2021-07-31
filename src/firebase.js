import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAol42oBz-w24Hb2A-wVYOsP8F45OSVMxg",
    authDomain: "linkedin-clone-jo.firebaseapp.com",
    projectId: "linkedin-clone-jo",
    storageBucket: "linkedin-clone-jo.appspot.com",
    messagingSenderId: "160101351447",
    appId: "1:160101351447:web:18d79286f24a7289e29c52"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };