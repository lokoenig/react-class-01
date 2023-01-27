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


// FILTER_SET_TEXT
const setFilterText = (filterText = "") => ({
    type: 'FILTER_SET_TEXT',
    text: filterText
});

const sortByAmount = () => ({
    type: 'FILTER_SET_SORT_FIELD',
    sortBy: 'amount'
});

const sortByDate = () => ({
    type: 'FILTER_SET_SORT_FIELD',
    sortBy: 'date'
});

const setStartDate = (searchStart = undefined) => ({
    type: 'FILTER_SET_DATE',
    dateRange: {
        ...store.getState().filters.dateRange,
        start: searchStart
    }
})


const filtersReducerDef = {
    text: '',
    sortBy: 'date', // date or amount
    dateRange: {start: undefined, end:undefined}
};
const filtersReducer = (state = filtersReducerDef, action) => {
    let out;
    switch (action.type) {
        case 'FILTER_SET_TEXT':
            out = {
                ...state,
                text: action.text
            };
            break;
        case 'FILTER_SET_SORT_FIELD':
            out = {
                ...state,
                sortBy: action.sortBy // this should have sanity checking
            }
            break;

        case 'FILTER_SET_DATE':
            out = {
                ...state, 
                dateRange: action.dateRange
            };
            break;
            
        default:
            out = state;
    };
    return out;
};


const getFilteredExpenses = (expenses,{text, sortBy, dateRange})=> {

    return expenses.filter((expense) => {
        const startDateMatch = 
        typeof dateRange.start !== 'number'
        ||
        expense.created >= dateRange.start;
        const endDateMatch =
            typeof dateRange.end !== 'number'
            ||
            expense.created <= dateRange.end;
        
        let textMatch = typeof text !== 'string' || text.length === 0;
        if (false == textMatch
            &&
            typeof expense.description === 'string'
            ) {
            const haystack = expense.description.toLowerCase();
            const needle = text.toLowerCase();
           textMatch = haystack.includes(needle);
           console.log('matched', textMatch);

            }
        ;
        return startDateMatch && endDateMatch && textMatch;
    });
};


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
store.subscribe(() => {
    const currentState = store.getState();
    const filtered = getFilteredExpenses(currentState.expenses,currentState.filters);
   console.log('filtered', filtered);

   // console.log('state', store.getState());
});

const { id: waffleID } = store.dispatch(addExpense({
    description: 'Waffles (frozen)',
    amount: 200,
    created: 1000,
})).expense;

const { id: sockID } = store.dispatch(addExpense({
    description: 'Socks',
    amount: 250,
    created: 2000,
}));

store.dispatch(addExpense({
    description: 'keycaps',
    amount: 12000,
    created: 3000,
}));

store.dispatch(addExpense({
    description: 'pizza pizza',
    amount: 12000,
    created: 13000
}));

store.dispatch(updateExpense(
    sockID,
    {
        description: 'fuzzy socks'
    }
));
console.log('filter for pizza');
store.dispatch(setFilterText('pizza'));
store.dispatch(setFilterText());


store.dispatch(removeExpense({
    id: waffleID
}));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());



store.dispatch(setStartDate(2000));
store.dispatch(setStartDate());
//store.dispatch(setStartDate(3000));




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
        dateRange: {start:undefined, end:undefined}
    }
};