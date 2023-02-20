import { isDate, format } from 'date-fns';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { getDatabase, ref, set, get, off, remove, update, onValue, push, child } from "firebase/database";
import database from "../firebase/firebase";




import { startAddExpense, addExpense, removeExpense, updateExpense } from './expenses';
import { ExpenseSingleTestData, ExpenseAlternateSingleTestData } from "../fixtures/expense-single";
const ExpenseSingleNulltData = {};
const mockStore = configureStore([thunk]);

describe('CRUD an Expense', () => {

    test('removeExpense - invalid ID', () => {
        const result = removeExpense('ccTestID');
        expect(result).toEqual({
            type: 'REMOVE_EXPENSE',
            id: 'ccTestID'
        });

    })


    test('updateExpense', () => {
        const result = updateExpense('ccTestID', { id: 'ccTestIDfalse', dummy: 'test object' });
        expect(result).toEqual({
            type: 'UPDATE_EXPENSE',
            id: 'ccTestID',
            updates: {
                dummy: 'test object',
                id: 'ccTestIDfalse'
            }
        })
    });

    test('should add expense to database and store', (done) => {
        const store = mockStore({});
      

        store.dispatch(startAddExpense(ExpenseAlternateSingleTestData)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...ExpenseAlternateSingleTestData
                }
            });

            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(ExpenseAlternateSingleTestData);
            done();
        });
    });


    test('CREATE Expense populated with passed values (local)', () => {
        const result = addExpense(ExpenseSingleTestData);
        expect(result).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...ExpenseSingleTestData,
            }
        })
    });

  

/*
    test('CREATE Expense on database & store populated with default values', () => {
        const store = mockStore({});

        store.dispatch(startAddExpense(ExpenseSingleNulltData)).then((done) => {
            const actions = store.getActions();
         
            expect(actions).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    ...ExpenseAlternateSingleTestData,
                    id: expect.any(String)
                }
            });
            done();
        });
    });
*/

});