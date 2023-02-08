import uuid from 'react-uuid';

import expensesReducer from "./expenses";
import ExpenseTestData from "../fixtures/expenses";
import ExpenseSingleTestData from "../fixtures/expense-single"
import FilterTestData from "../fixtures/filter";

test('expensesReducer @@INIT (undef state)', () => {
    const result = expensesReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual([]);
});

test('expensesReducer remove valid ID', () => {
    const targetExpense = Math.floor(Math.random() * ExpenseTestData.length);
    let testExpenses = ExpenseTestData.map((x) => x);
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: { id: ExpenseTestData[targetExpense].id }
    }
    const result = expensesReducer(testExpenses, action);
    testExpenses.splice(targetExpense, 1); // remove the element from expected
    expect(result).toEqual(testExpenses);

});

test('expensesReducer remove invalid ID', () => {
    const targetExpense = Math.floor(Math.random() * ExpenseTestData.length);
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: 'notvalid'
    }
    const result = expensesReducer(ExpenseTestData, action);
    expect(result).toEqual(ExpenseTestData);
});


test('expensesReducer Add Expense', () => {
    const testID = uuid();

    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            ...ExpenseSingleTestData,
            id: testID
        }
    };
    const result = expensesReducer(ExpenseTestData, action);
    expect(result).toEqual([...ExpenseTestData, action.expense]);
});

test('expensesReducer Update Expense', () => {
    const targetExpense = Math.floor(Math.random() * ExpenseTestData.length);
    const testID = ExpenseTestData[targetExpense].id;
    const action = {
        type: 'UPDATE_EXPENSE',
        id: testID,
        updates: ExpenseSingleTestData
   
    };

    const testExpenses = ExpenseTestData.map( (ex)=>{
        if (ex.id === testID) {
            return { ...ExpenseSingleTestData, id: testID };
        } else {
            return ex;
        }
    });

    const result = expensesReducer(ExpenseTestData, action);

    expect(result).toEqual(testExpenses);
});