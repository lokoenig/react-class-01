import React from "react";
import ExpenseTestData from "../fixtures/expenses";
import FilterTestData from "../fixtures/filter";
import { expenseListTotal } from "./expenseListTotal";

test('Checks 0 value of empty expense array', () => {
    expect(expenseListTotal({ expenses: []})).toBe(0);
});

test('Checks value of single Expense', () => {
    expect(expenseListTotal({ expenses: [ExpenseTestData[0]], filters: FilterTestData })).toBe(14000);
});

test('Checks full list value of expenseListTotal', () => {
    expect(expenseListTotal({ expenses: ExpenseTestData, filters: FilterTestData })).toBe(1803632);
});

// 1803632