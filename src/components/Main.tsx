// import * as React from "react";
// declare function require(name:string);
require("react") //--> using let because of namespace issues of importing using require 
// import React from "react"
require("./Card")
// import Card from "./Card";

const Main = () => (
  <>
    <div className='main'>
      <Card />
    </div>
  </>
);

// export default Main;
module.exports = Main