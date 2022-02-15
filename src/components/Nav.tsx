import * as React from "react";
import Timer from "./Timer";
import { AiFillPlusCircle } from "react-icons/ai";

import { addCard } from "../redux/navigationSlice";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();

  // create functions that dispatch reducers to the store
  // eg const addCardHandleClick = () => {
  // instantiate variables for the input field and text from form
  // if no fields are empty
  // dispatch(addCard({text});
  // else alert required fields not completed
  // }

  return (
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
};

export default Nav;
