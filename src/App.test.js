import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';

import App from './App';
import { Provider } from "react-redux";


const mockStore = configureStore([thunk]);
const store = mockStore({});


test('App framework changes', () => {
    const { getByText, asFragment } = render(
        <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </Provider>
        );
    //    screen.debug();
    expect(asFragment()).toMatchSnapshot();
});
