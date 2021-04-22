import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDaIKaldh06XRs8IvntrnvaE5DOCanIrHY",
    authDomain: "disney-clone-60933.firebaseapp.com",
    projectId: "disney-clone-60933",
    storageBucket: "disney-clone-60933.appspot.com",
    messagingSenderId: "1059217162553",
    appId: "1:1059217162553:web:c897510533750934c368e8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;