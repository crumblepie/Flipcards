import * as React from "react";
import Timer from './Timer';
import { AiFillPlusCircle } from "react-icons/ai";

const Nav = () => (
  <div className='nav'>
    <div></div>
    <h1>Flashcards</h1>
    <Timer />
    <span
      style={{
        padding: "1rem",
        fontSize: "1.5em",
        color: "aquamarine",
      }}
    >
      <AiFillPlusCircle />
    </span>
  </div>
);

export default Nav;
