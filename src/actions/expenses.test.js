import { isDate, format } from 'date-fns';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { getDatabase, ref, set, get, off, remove, update, onValue, push, child } from "firebase/database";
import {database} from "../firebase/firebase";

// functions to test:
import { 
    startAddExpense, addExpense, 
    startRemoveExpense, removeExpense, 
    startUpdateExpense, updateExpense, 
    startSetExpenses, setExpenses  } from './expenses';

// test data:
import { ExpenseSingleTestData, ExpenseAlternateSingleTestData } from "../fixtures/expense-single";
import { ExpenseTestData } from "../fixtures/expenses";

const ExpenseSingleNulltData = {};
const testUserID='iAmTheWalrus';
const expenseDBPath = '/user_data/' + testUserID + '/expenses/';

const mockStore = configureStore([thunk]);

describe('CRUD an Expense', () => {
    let lastID;

    test('CREATE Expense populated with passed values (local)', () => {
        const result = addExpense(ExpenseSingleTestData);
        expect(result).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...ExpenseSingleTestData,
            }
        })
    });


    test('UPDATE Expense (local)', () => {
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

    test('DELETE Expense - invalid ID (local)', () => {
        const result = removeExpense('ccTestID');
        expect(result).toEqual({
            type: 'REMOVE_EXPENSE',
            id: 'ccTestID'
        });

    });

    





    test(
        'should add expense to database and store', 
        (done) => {
        const store = mockStore({auth:{testUserID} });

        store.dispatch(startAddExpense(ExpenseAlternateSingleTestData))
        .then(() => {
            const actions = store.getActions();
            let localTestData = { ...ExpenseAlternateSingleTestData}; //deep copy
            console.log('expense created' , actions[0].expense.created)
            const dbRef = ref(database, expenseDBPath + actions[0].expense.id );
            return get(dbRef);
        }).then((snapshot) => {
          console.log('add expense', snapshot)
            expect(snapshot.val()).toEqual(ExpenseAlternateSingleTestData);
            done();
        });
    });


  



    test(
        'SET creates multiple expenses',
        () => {
            const result = setExpenses(ExpenseTestData);
            expect(result).toEqual({
                type: 'SET_EXPENSES',
                expenses: ExpenseTestData
            })

        }
    );


    test(
        'should read all test data from database',
        (done) => {
            const store = mockStore({ auth: { testUserID } });
            store.dispatch(startSetExpenses())
                .then(() => {
                    const actions = store.getActions();
                    
                   // console.log('actions[0].expenses', actions[0].expenses);
                   /* expect(actions[0]).toEqual({
                        type: 'SET_EXPENSES',
                        expenses: ExpenseTestData
                    });
                    */
                    lastID = actions[0].expenses[actions[0].expenses.length -1].id;
                    expect(actions[0].type).toEqual('SET_EXPENSES');
                    done();

                });
        });  


        // going to need a valid ID to test with


    test(
        'UPDATE expense on store and database',
        (done) => {
            const store = mockStore({ auth: testUserID});
            const newNote = 'I am not a note';
            const dbPath = '/user_data/' + testUserID + '/expenses/' + lastID + '/note';
            store.dispatch(startUpdateExpense(lastID, {note:newNote}))
            .then( ()=> {
                const actions = store.getActions();
                console.log('UPDATE actions', actions);
                return get(ref(database,dbPath));
            })
            .then( (snapshot) => {
                expect(snapshot).toBeDefined();
                expect(snapshot.val()).toEqual(newNote);
                done();
            })

        }
    )


    test(
        'REMOVE expense (store and database)',
        (done) => {
            const store = mockStore({ auth: testUserID});
            store.dispatch(startRemoveExpense(lastID))
                .then(() => {
                    const actions = store.getActions();
                    console.log('REMOVE actions',actions);
                    done();
                })
        }
    )


});

