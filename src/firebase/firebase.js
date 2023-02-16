// import * as firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// moved the credentials out of git:
import firebaseConfig from "../../credentials"



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();



set(ref(database, 'user/id_' + 1 ), {
    name: 'Lonster',
    profile_picture: 'peanut',
    location: {
        city: 'Minneapolis',
        state: 'MN'
    },
    attributes: {
        height: '5\'9"',
        weight: 350
    }
});


