// import * as firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// moved the credentials out of git:
import {firebaseConfig} from "../credentials"


// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase();

export {firebase, database as default};

/*
const p1 = 'user/id_' + 1;
const p2 = 'user/id_' + 2;

const expenseTestData = [
    {
        description: 'booze',
        note: 'Drinky drink',
        amount: 14000,
        created: (new Date(1995, 4, 1))
    },
    {
        description: 'rent',
        note: 'Pay or move on',
        amount: 120000,
        created: (new Date(1999, 2, 27))
    },
    {
        description: 'Cat Supplies',
        note: '',
        amount: 3333,
        created: (new Date(2002, 2, 27))
    },
    {
        description: 'combs',
        note: 'For all the hair!',
        amount: 1666299,
        created: (new Date(2018, 12, 20))
    }
];
*/
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

setTimeout(() => {
    const updates = {};
    updates['location/state'] = 'MN';
    updates['stress_level'] = 1;
    updates['job/org'] = 'IRS';
    update(ref(database), updates).then(() => {
        console.log('update returned')
    });
}, 2000);


setTimeout(() => {
    unsub();
    console.log('unsub')
}, 10000);


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