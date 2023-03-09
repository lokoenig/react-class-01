import { ref, get, remove, update, push, child } from "firebase/database";

import {database} from "../firebase/firebase";


// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

// REMOVE_EXPENSE
export const removeExpense = (id) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    }
};

// REMOVE_EXPENSE (with database)
export const startRemoveExpense = (id) => {
    return (dispatch) => {
        const dbRef = ref(database, '/expenses/' + id);
        dispatch(removeExpense(id));
        return remove(dbRef)
    }
}

// UPDATE_EXPENSE
export const updateExpense = (id, updates) => {
    return {
        type: 'UPDATE_EXPENSE',
        id,
        updates
    }
};

// UPDATE_EXPENSE (with database)
export const startUpdateExpense = (id, updates) => {
    let i;
    return (dispatch) => {
        const dbPath = '/expenses/' + id + '/';
        dispatch(updateExpense(id, updates));
        let dbUpdates = {};

        for (i in updates) {
            dbUpdates[dbPath + i] = updates[i];
        }
        return update(ref(database), dbUpdates);
    }
}

//connect the thunk calls. (For Firebase)
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            created = new Date()
        } = expenseData;

        const newPostKey = push(child(ref(database), 'expenses')).key;
        const rec = { description, note, amount, created, id: newPostKey };

        let updates = {};
        updates['/expenses/' + newPostKey] = rec;
        updates['/user_expenses/1/' + newPostKey] = rec.description;

        dispatch(addExpense(rec));
        console.log('startAddExpense: dispatched');

        return update(ref(database), updates); // return the promise for the update

    }
}

// ADD MULTIPLE EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {

    return (dispatch) => {
        const dbRef = ref(database, '/expenses');
        let expensesFromDB = [];
        let childKey, childData;

        return get(dbRef)
            .then(snapshot => {
                if (snapshot.exists) {
                    snapshot.forEach((ex) => {
                        childKey = ex.key;
                        childData = ex.val();
                        expensesFromDB.push({
                            ...childData,
                            created: new Date(childData.created),
                            id: childKey
                        })
                    });
                    dispatch(setExpenses(expensesFromDB));
                }

            });




    };

};
