// import * as React from "react";
// declare function require(name:string);
// require("react") //--> using let because of namespace issues of importing using require 
import React from "react"
// require("./FlipCard")
import Flipcard from "./Flipcard";

const Main = () => (
  <>
    <div className='main'>
      <Flipcard />
    </div>
  </>
);

export default Main;
// module.exports = Main