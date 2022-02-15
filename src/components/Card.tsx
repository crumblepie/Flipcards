// import * as React from "react";
const React = require("react"); 
// import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
const {BiLeftArrow, BiRightArrow} = require("react-icons/bi")

const Card = () => (
  <>
    <div className='card'>
      <input type='checkbox' />
      <div className='card-front'>
        <h4>CARD HEADING</h4>
        <div>IMG</div>
        <div className='card-front-content'>
          <BiLeftArrow />
          <span>Description</span>
          <BiRightArrow />
        </div>
      </div>
      <div className='card-back'>Back</div>
    </div>
  </>
);

// export default Card;
module.exports = Card
