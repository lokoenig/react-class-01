import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';

import PageHeader from "./Header";

test('Confirm DOM structure of page header', ()=>{
    const renderer = new ShallowRenderer();
    renderer.render(<PageHeader />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
})
