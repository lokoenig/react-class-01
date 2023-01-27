import { createStore, combineReducers } from "redux";
import uuid from 'react-uuid';
// ADD_EXPENSE
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    created = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        created
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
});

// UPDATE_EXPENSE
const updateExpense = (id, updates) => ({
    type: 'UPDATE_EXPENSE',
    id,
    updates
});



const expensesReducerDef = [];
const expensesReducer = (state = expensesReducerDef, action) => {
    let out;
    switch (action.type) {
        case 'ADD_EXPENSE':
            out = [...state, action.expense];
            break;

        case 'REMOVE_EXPENSE':
            out = state.filter((v) => {
                return (v.id !== action.expense.id)
            });
            break;

        case 'UPDATE_EXPENSE':
            out = state.map((v) => {
                if (v.id === action.id) {
                    return {
                        ...v,
                        ...action.updates
                    };
                } else {
                    return v;
                }
            });
            break;

        default:
            out = state;
    };
    return out;
};


const filtersReducerDef = {
    text: '',
    sortBy: 'date', // date or amount
    dateRange: [undefined, undefined]
};
const filtersReducer = (state = filtersReducerDef, action) => {
    let out;
    switch (action.type) {
        default:
            out = state;

    };
    return out;
};


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
store.subscribe(() => {
    console.log('state', store.getState());
});

const { id: waffleID } = store.dispatch(addExpense({
    description: 'Waffles (frozen)',
    amount: 200
})).expense;

const { id: sockID } = store.dispatch(addExpense({
    description: 'Socks',
    amount: 250
}));

store.dispatch(addExpense({
    description: 'keycaps',
    amount: 12000
}));

store.dispatch(addExpense({
    description: 'pizza pizza',
    amount: 12000
}));

store.dispatch(updateExpense(
    sockID,
    {
        description: 'fuzzy socks'
    }
));

store.dispatch(removeExpense({
    id: waffleID
}));

const uusy = {
    firstname: 'Biff',
    callsign: 'Kingsly'
};

console.log(
    {
        ...uusy
    }
)

const demoState = {
    expenses: [{
        id: 'aosidjadso',
        description: 'GoDaddy Annual',
        note: 'so much money',
        amount: 12245,
        created: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        dateRange: [undefined, undefined]
    }
};