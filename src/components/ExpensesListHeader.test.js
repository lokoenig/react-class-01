import React from "react";
import { render, screen } from '@testing-library/react';

import ExpensesListHeader from "./ExpensesListHeader";
import ExpenseTestData from "../fixtures/expenses";


test('snapshot header with standard fixture data', ()=>{

    const { getByText, asFragment } =
        render(
            <ExpensesListHeader
            expenses={ExpenseTestData} />
        );
    expect(asFragment()).toMatchSnapshot();
});