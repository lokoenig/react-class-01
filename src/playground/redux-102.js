import { createStore, combineReducers } from "redux";


const expensesReducerDef = [];
const expensesReducer = (state = expensesReducerDef,action)=>{
    let out;
    switch(action.type){
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
console.log(store.getState());

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