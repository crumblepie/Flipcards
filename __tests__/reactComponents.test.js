// import React from "react";
const React = require("react"); 
const render = require('@testing-library/react').render; 
// import {render, screen} from '@testing-library/react'
const screen = require('@testing-library/react').screen;
// import { act } from "react-dom/test-utils";
const act = require('react-dom/test-utils').act; 
// import '@testing-library/jest-dom'
const jestDom = require('@testing-library/jest-dom'); 

// import Main from "../src/components/Main";
const Main = require('../src/components/Main')
const Card = require('../src/components/Card')
// import Card from "../src/components/Card"


describe('React unit testing', () => {


it("Card component should render heading", () => {
    render(<Card></Card>)
    expect(screen.getByRole('heading')).toHaveTextContent('Guess the problem solving pattern')
})

it("Card component should render buttons", () => {
    render(<Card></Card>)
    expect(screen.getAllByRole('button')).toEqual(expect.anything());
})  

it("Card component should render input box", () => {
    render(<Card></Card>)
    expect(screen.getByRole('textbox')).toEqual(expect.anything());
})  

// how do we test stateful components?

}); 


