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

    expect
});

test('header totals', () => {

        render(
            <ExpensesListHeader
                expenses={ExpenseTestData} />
        );
    const totalElement = screen.getByTitle(/total expenses amount/i);
    expect(totalElement).toHaveTextContent('$18,036.32');
      //  screen.debug();
});