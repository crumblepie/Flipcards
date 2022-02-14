import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from "./src/App"

//render flash cards with data 
describe('React unit testing', () => {

let container = null; 
beforeEach(() => {
    //creating target component for test rendering
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterAll (() => {
    //remove test component from dom 
    unmountComponentAtNode(container); 
    container.remove();
    container = null;
})

}); 