// import * as React from "react";
// declare function require(name:string);
import React = require("react")
const Card = require("./Card")
// import Card from "./Card";

const Main = () => (
  <>
    <div className='main'>
      MAIN
      <Card />
    </div>
  </>
);

// export default Main;
module.exports = Main