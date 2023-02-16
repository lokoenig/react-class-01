// import * as firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM1st-rZwynhtvaZULRh4G7wBEwbURCTw",
    authDomain: "letest-7fb83.firebaseapp.com",
    databaseURL: "https://letest-7fb83-default-rtdb.firebaseio.com",
    projectId: "letest-7fb83",
    storageBucket: "letest-7fb83.appspot.com",
    messagingSenderId: "31839172112",
    appId: "1:31839172112:web:d054c389ff090715be7c95"
};

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
        height: '5\'9\"',
        weight: 350
    }
});


