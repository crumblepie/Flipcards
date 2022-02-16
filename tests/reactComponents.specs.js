import React from "react";
import {render, screen} from '@testing-library/react'
import { expect } from 'chai';
import 'mocha';

import Main from "../src/components/Main";
import Flipcard from "../src/components/Flipcard"


describe('React unit testing', () => {

it("Card component should render heading", () => {
    render(<Flipcard> </Flipcard>)
    const headers = screen.getAllByRole("heading");
    expect(headers).to.have.lengthOf(2);
    expect(headers[0].textContent).to.equal('Guess the problem solving pattern')
})

it("Card component should render buttons", () => {
    render(<Flipcard></Flipcard>)
    expect(screen.getAllByRole('button')).to.be.an('array');
})  

it("Card component should render input box", () => {
    render(<Flipcard></Flipcard>)
    const input = screen.getByRole('textbox');
    expect(input).to.not.be.an('error')
})  


}); 


