import React from "react";
import { render, screen, waitFor, within } from '@testing-library/react';
import user from '@testing-library/user-event';

import { AddExpensePage } from "./AddExpensePage";

test('renders full Edit Expense page', () => {
    const subSpy = jest.fn();
    const { getByText, asFragment } = render(
        <AddExpensePage
            updateExpense={subSpy}
        />);
    expect(asFragment()).toMatchSnapshot();
});
