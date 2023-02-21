import { isDate, format } from 'date-fns';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { getDatabase, ref, set, get, off, remove, update, onValue, push, child } from "firebase/database";
import database from "../firebase/firebase";




import { startAddExpense, addExpense, removeExpense, updateExpense, setExpenses, startSetExpenses } from './expenses';
import { ExpenseSingleTestData, ExpenseAlternateSingleTestData } from "../fixtures/expense-single";
import { ExpenseTestData } from "../fixtures/expenses";
import { stringify } from 'postcss';
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

    test(
        'should add expense to database and store', 
        (done) => {
        const store = mockStore({});

        store.dispatch(startAddExpense(ExpenseAlternateSingleTestData))
        .then(() => {
            const actions = store.getActions();
            let localTestData = { ...ExpenseAlternateSingleTestData}; //deep copy

           // localTestData.created = new Date(localTestData.created)
            console.log('test', typeof localTestData.created)
            console.log('actions' , typeof actions[0].expense.created)
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    ...localTestData,
                    id: expect.any(String),
                }
            });
            const dbRef = ref(database, '/expenses/' + actions[0].expense.id );
            return get(dbRef);
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
            const store = mockStore({});
            store.dispatch(startSetExpenses())
                .then(() => {
                    const actions = store.getActions();
                    /*
                    console.log('actions[0].expenses', actions[0].expenses);
                    expect(actions[0]).toEqual({
                        type: 'SET_EXPENSES',
                        expenses: ExpenseTestData
                    });
                    */
                    expect(actions[0].type).toEqual('SET_EXPENSES');
                    done();

                });
        });  

});

