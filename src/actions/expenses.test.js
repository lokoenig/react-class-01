import { isDate, format } from 'date-fns';

import { addExpense, removeExpense, updateExpense } from './expenses';


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

test('addExpense populated', ()=>{
    const expenseTestData = {
        description: 'I am not a waffle __!!#',
        amount: 66666,
        created: new Date('6/15/2021'),
        note: 'notes cannot contain waffles or egg products'
    };

    const result = addExpense(expenseTestData);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseTestData,
            id: expect.any(String)
        }
    })
})

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