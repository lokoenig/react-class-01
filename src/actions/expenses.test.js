import { isDate, format } from 'date-fns';

import { addExpense, removeExpense, updateExpense } from './expenses';
import ExpenseTestData from "../fixtures/expense-single";

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

test('addExpense populated with passed values', ()=>{
    const result = addExpense(ExpenseTestData);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...ExpenseTestData,
        }
    })
})

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