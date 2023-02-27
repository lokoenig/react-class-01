import React from "react";
import { render, screen, waitFor, within } from '@testing-library/react';
import user from '@testing-library/user-event';

import {LogOutLink} from "./LogOutLink";



test('Tests Log Out Button', () => {
    const startLogout = jest.fn();
    render(
        <>
            <LogOutLink
                startLogout={startLogout}
            />
        </>);
    user.click(screen.getByText(/log out/i));

screen.debug()
    expect(startLogout).toHaveBeenCalled();
});