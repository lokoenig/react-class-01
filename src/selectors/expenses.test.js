import uuid from 'react-uuid';
import { startOfMonth, endOfMonth } from 'date-fns'
import getFilteredExpenses from "./expenses";
import ExpenseTestData from "../fixtures/expenses";
import FilterTestData from "../fixtures/filter";


test('getFilteredExpenses (sort by date)', ()=>{
    const filter = {
        ...FilterTestData,
        sortBy: 'date'
    };
    const expenses = [
        ...ExpenseTestData,
    ];
    const result = getFilteredExpenses(ExpenseTestData, filter );
    expect(result).toEqual([
        expenses[3],
        expenses[2],
        expenses[1],
        expenses[0]
    ])
});

test('getFilteredExpenses (sort by amount)', () => {
    const ff = {
        ...FilterTestData,
        sortBy: 'amount' // date or amount
    };
    
    const expenses = [
        ...ExpenseTestData,
    ];

    const result = getFilteredExpenses(ExpenseTestData, ff);
    expect(result).toEqual([
        expenses[3],
        expenses[1],
        expenses[0],
        expenses[2]
    ]);
});


test('getFilteredExpenses (filter date range only)', () => {
    const filter = {
        ...FilterTestData,
        sortBy: 'date', // date or amount
        dateRange: {
            start: (new Date(1999, 11, 1)),
            end: (new Date(2029, 1, 1))
        }
    }

        const expenses = [
            ...ExpenseTestData,
        ];


    const result = getFilteredExpenses(ExpenseTestData, filter);

    expect(result).toEqual([
        expenses[3],
        expenses[2]
    ]);
});
