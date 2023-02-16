import { isDate, format } from 'date-fns';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';


import { startAddExpense, addExpense, removeExpense, updateExpense } from './expenses';
import { ExpenseSingleTestData, ExpenseAlternateSingleTestData} from "../fixtures/expense-single";

const mockStore = configureStore([thunk]);

describe('CRUD an Expense', () => {

test('removeExpense - invalid ID', ()=>{
    const result = removeExpense('ccTestID');
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'ccTestID'
    });
})


test('updateExpense', ()=>{
    const result = updateExpense('ccTestID', { id:'ccTestIDfalse', dummy:'test object'});
    expect(result).toEqual({
        type: 'UPDATE_EXPENSE',
        id:'ccTestID',
        updates: {
            dummy: 'test object',
            id: 'ccTestIDfalse'
        }
    })
});

test('CREATE Expense populated with passed values', ()=>{
    const result = addExpense(ExpenseSingleTestData);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...ExpenseSingleTestData,
        }
    })
});

    test('CREATE Expense on database & store populated with passed values', () => {
        const store = mockStore({});
        store.dispatch(startAddExpense())

    });




});

/*
test('addExpense defaults', ()=>{
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description : '',
            note : '',
            amount : 0,
            created: expect.anything(),
            id: expect.any(String)
        }
    })
});
*/