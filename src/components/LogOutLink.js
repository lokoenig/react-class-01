import React from "react";
import { firebase } from '../firebase/firebase';
import { getAuth, signOut } from "firebase/auth";


const startLogOut = ()=>{
    console.log('log out');
    const firebaseAuth = getAuth(firebase);

    return signOut(firebaseAuth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

}

export const LogOutLink = ()=>{
    return(
        <>
            <a onClick={startLogOut}>Log Out</a>
        </>
    )
}

export default LogOutLink;