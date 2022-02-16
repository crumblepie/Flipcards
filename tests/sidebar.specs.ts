import React from "react";
import {render, screen} from '@testing-library/react'
import { expect } from 'chai';
import 'mocha';

import Sidebar from "../src/components/Sidebar"


describe('React unit testing', () => {

it("Sidebar component should render", () => {
    render(<Sidebar> </Sidebar>)
    const headers = screen.getAllByRole("heading");
    expect(headers).to.have.lengthOf(2);
    expect(headers[0].textContent).to.equal('Guess the problem solving pattern')
})

}); 


