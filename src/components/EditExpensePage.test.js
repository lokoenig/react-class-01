import React from "react";
import { render, screen, waitFor, within } from '@testing-library/react';
import user from '@testing-library/user-event';

import { EditExpensePage } from "./EditExpensePage";


test('renders full Add Expense page', () => {
    const subSpy = jest.fn();
    const { getByText, asFragment } = render(
        <EditExpensePage
            addExpense={subSpy}
        />);
    expect(asFragment()).toMatchSnapshot();
});
