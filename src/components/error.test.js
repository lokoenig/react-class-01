import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import ErrorPage from "./error";


describe('404 page', () => {
    it('renders ErrorPage component', () => {
        const { getByText, asFragment } = render(
            <BrowserRouter>
                <ErrorPage />
            </BrowserRouter>);
    //    screen.debug();
        expect(asFragment()).toMatchSnapshot();
    });
});