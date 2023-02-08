import React from "react";
import { render, screen } from '@testing-library/react';


import ExpenseTestData from "../fixtures/expenses";
import { ExpensesList } from "./ExpensesList";
import { BrowserRouter } from "react-router-dom";

test('renders ExpensesList component - with expenses', () => {
    const { getByText, asFragment } =
        render(
            <BrowserRouter>
                <ExpensesList expenses={ExpenseTestData} />
            </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
});

test('renders ExpensesList component - no expenses', () => {
    const { getByText, asFragment } =
        render(
            <BrowserRouter>
                <ExpensesList expenses={[]} />
            </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
});