import React from "react";
import { render, screen, waitFor, within } from '@testing-library/react';
import user from '@testing-library/user-event';

import ExpenseTestData from "../fixtures/expenses";

import ExpenseForm from "./ExpenseForm";


describe('ExpenseForm', () => {
    const onSubmit = jest.fn();
/*
    beforeEach(() => {
        onSubmit.mockClear();
        render(<ExpenseForm onSubmit={onSubmit} />);
    });
  */  
    test('checks if ExpenseForm changed', () => {
        const { getByText, asFragment } = render(
            <ExpenseForm />
        );
        expect(asFragment()).toMatchSnapshot();
    });


test('renders populated ExpenseForm', ()=>{
    const targetExpense = Math.floor(Math.random() * ExpenseTestData.length);
    const { getByText, asFragment } = render(
        <ExpenseForm
            onSubmit={onSubmit}
            expense={ExpenseTestData[targetExpense]}
         />
    );
    screen.debug();
  //  const elem = screen.getByTitle('Edit An Expense Entry');
  /*
    const subButton = screen.getByRole('button', {
        name: /.* Expense$/
    });
    */
    clickSubmitButton();
   // expect(asFragment()).toMatchSnapshot();
});

});


function clickSubmitButton() {
    user.click(screen.getByRole('button', { name: /Add Expense/}));
}