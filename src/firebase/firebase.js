// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// moved the credentials out of git:
import { firebaseConfig } from "../credentials"
// console.log('api: '  + firebaseConfig.apiKey);

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const database = getDatabase();



/*
// populate the DB 
let newPostKey, updates;
expenseTestData.forEach((rec)=>{
    newPostKey = push(child(ref(database), 'expenses')).key;
    updates ={};
    updates['/expenses/' + newPostKey] = rec;
    updates['/user_expenses/1/' + newPostKey] = rec.description;
    update(ref(database), updates);
});
*/

/*
let localExpenses = [];
const expensesRef = ref(database, 'expenses');



const unsub = onValue(expensesRef, (snapshot) => {
    localExpenses = [];
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
       // console.log('expensesRef', childKey, childData );
        localExpenses.push({
            id: childKey,
            ...childData
        })
    });
    const data = snapshot.val();
    console.log('localExpenses', localExpenses);
    
})
*/

/*
const userRef = ref(database, p1);

const unsub = onValue(userRef, (snapshot) => {
    const data = snapshot.val();
   // console.log('onValue', data);
   console.log( data.name + ' works at ' + data.job.org + ' as a ' + data.job.title + '.');
});

*/

/*
set(ref(database, p1 ), {
    name: 'Lonster',
    profile_picture: 'peanut',
    location: {
        city: 'Minneapolis',
        state: 'MN'
    },
    stress_level: 6,
    job: {
        title: "Lord and Master",
        org: 'Waffle Hut'
    },
    is_single: false,
    attributes: {
        height: '5\'9"',
        weight: 350
    }
}).then(()=>{
    console.log('saved user 1')
}).catch((e)=>{
    console.log('err:' + e)
})

set(ref(database,p2), {
    name: 'Steve',
    profile_picture: 'walfruss',
    is_single: true,
    stress_level: 2,
    location: {
        city: 'Albuquerque',
        state: 'NM'
    },
    job: {
        title: "Bit Poker",
        org: 'Amazon'
    },
    attributes: {
        height: '6\'1"',
        weight: 188
    }
}).then(() => {
    console.log('saved user 2')
}).catch((e) => {
    console.log('err:' + e)
})
remove(ref(database, p1 + '/is_single')).then(()=>{
    console.log('remove user 1')
});

remove(ref(database, p2 + '/is_single')).then(() => {
    console.log('remove user 2')
});

const updates = {};
updates[p1 + '/location/state'] = 'WA';
updates[p1 + '/stress_level'] = 10;
updates[p1 + '/job/org'] = 'Twitter';


update(ref(database), updates).then(()=>{
    console.log('update returned')
});




*/