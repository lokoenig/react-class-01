import React from "react";
import { render, screen, waitFor, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';

import LoginPage from "./LoginPage";

describe('Login Page', () => {
    test('renders full Login page', () => {

        const { getByText, asFragment } = render(
            <Router>
                <LoginPage />
            </Router>);
        expect(asFragment()).toMatchSnapshot();
    });


});
