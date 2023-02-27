import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {firebase} from "../firebase/firebase";
const firebaseAuth = getAuth(firebase);
const googleAuthProvider = new GoogleAuthProvider();

// googleAuthProvider = 'provider' from sample code
// firebaseAuth = 'auth' from sample code
export const startLogin = () => {

 

        console.log('startLogin');

    signInWithPopup(firebaseAuth, googleAuthProvider)
            .then((result) => {
                console.log('signInWithPopup');
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                console.log('signInWithPopup FAIL');

                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...

                console.log(errorCode, errorMessage);
            });




   

};