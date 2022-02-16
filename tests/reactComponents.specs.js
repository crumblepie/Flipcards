// import React from "react";
const React = require("react"); 
const render = require('@testing-library/react').render; 
// import {render, screen} from '@testing-library/react'
const screen = require('@testing-library/react').screen;
// import { act } from "react-dom/test-utils";
const act = require('react-dom/test-utils').act; 
// import '@testing-library/jest-dom'
// const jestDom = require('@testing-library/jest-dom'); 

// import Main from "../src/components/Main";
const Main = require('../src/components/Main')
const Flipcard = require('../src/components/Flipcard')
// import Card from "../src/components/Card"

import ReactDOM from "react-dom";
import {JSDOM} from "jsdom";
import { expect } from 'chai';
import 'mocha';

const dom = new JSDOM(`...`);
const { window } = dom;
const { document } = dom.window;

let rootContainer;

beforeEach(() => {
    rootContainer = document.createElement("div");
    document.body.appendChild(rootContainer);
  });
  
  
  afterEach(() => {
    document.body.removeChild(rootContainer);
    rootContainer = null;
  });

describe('React unit testing', () => {

it("Card component should render heading", () => {
    act(() => {
        ReactDOM.render(<Flipcard> </Flipcard>, rootContainer)
    });
    const header = rootContainer.querySelector(".card-header");
    expect(header.textContent).to.equal('Guess the problem solving pattern')
})

it("Card component should render heading", () => {
    act(() => {
        ReactDOM.render(<h1 className="test">test</h1>, rootContainer)
    });
    const header = rootContainer.querySelector(".test");
    expect(header.textContent).to.equal('test')
})

it("Card component should render heading", () => {
    act(() => {
        dom.render(<h1 className="test">test</h1>)
    });
    const header = document.querySelector(".test");
    expect(header.textContent).to.equal('test')
})

it("Card component should render buttons", () => {
    ReactDOM.render(<Flipcard></Flipcard>)
    expect(screen.getAllByRole('button')).to.equal(expect.anything());
})  

it("Card component should render input box", () => {
    render(<Flipcard></Flipcard>)
    expect(screen.getByRole('textbox')).toEqual(expect.anything());
})  

// how do we test stateful components?

}); 


