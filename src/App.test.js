import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import App from './App';

test('App framework changes', () => {
    const { getByText, asFragment } = render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
        );
    //    screen.debug();
    expect(asFragment()).toMatchSnapshot();
});
