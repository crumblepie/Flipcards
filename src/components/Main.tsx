// import * as React from "react";
// declare function require(name:string);
// require("react") //--> using let because of namespace issues of importing using require 
import React from "react"
// require("./FlipCard")
import Flipcard from "./Flipcard";
import Flipcard_Btns from "./Flipcard_Btns";

const Main = () => (
  <>
    <div className='main'>
      <Flipcard />
      <Flipcard_Btns />
    </div>
  </>
);

export default Main;
// module.exports = Main