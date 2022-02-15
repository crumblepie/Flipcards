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


describe('React unit testing', () => {

//basic component tests 
it("super basic test", () => {
    render(<Main></Main>)
    expect(screen.getByRole('heading')).toHaveTextContent('CARD HEADING')

})

//flashcard component test

}); 


// let container = null; 
// beforeEach(() => {
//     //creating target component for test rendering
//     container = document.createElement("div");
//     document.body.appendChild(container);
// })

// afterAll (() => {
//     //remove test component from dom 
//     unmountComponentAtNode(container); 
//     container.remove();
//     container = null;
// })