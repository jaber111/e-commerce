import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAqB5DRurqpmxVKxwdLbfMB0gGAUr2jNXY",
    authDomain: "crwn-jabeur.firebaseapp.com",
    databaseURL: "https://crwn-jabeur.firebaseio.com",
    projectId: "crwn-jabeur",
    storageBucket: "crwn-jabeur.appspot.com",
    messagingSenderId: "946764768468",
    appId: "1:946764768468:web:1d78f57ac1c11d0832c741",
    measurementId: "G-EYBDLNEPZS"
};
export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return ;


};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;