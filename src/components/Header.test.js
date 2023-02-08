import React from "react";
import { render, screen } from '@testing-library/react';

import PageHeader from "./Header";

describe('PageHeader', () => {
    it('renders PageHeader component', () => {
        const { getByText, asFragment} = render(<PageHeader />);
       // screen.debug();
        expect(asFragment()).toMatchSnapshot();
    });
});