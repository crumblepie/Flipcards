import * as React from "react";
// import Timer from './Timer';
const {useState} = require("react");
const Timer = require('./Timer'); 
import { AiFillPlusCircle } from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";

import { addCard } from "../redux/navigationSlice";
import { changeTheme } from "../redux/themeSlice";
import { useDispatch } from "react-redux";

const Nav = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  // create functions that dispatch reducers to the store
  // eg const addCardHandleClick = () => {
  // instantiate variables for the input field and text from form
  // if no fields are empty
  // dispatch(addCard({text});
  // else alert required fields not completed
  // }

  const themeToggle = () => {
    document.body.classList.toggle("theme-light");
    dispatch(changeTheme());
  };

  const showFormHandle = () => {
    console.log(`showFormHandle clicked`);
    setShowForm(!showForm);
  };

  const addCardHandleClick = () => {
    console.log("addCardHandleClick clicked");
  };

  return (
    <div className='nav'>
      <div></div>
      <h1>Flashcards</h1>
      <Timer />
      <FaSun
        style={{ color: "var(--sunColor" }}
        onClick={() => themeToggle()}
      />
      <span
        style={{
          padding: "1rem",
          fontSize: "1.5em",
          color: "var(--addButtonColor)",
        }}
      >
        <AiFillPlusCircle onClick={showFormHandle} />
      </span>
    </div>
  );
};

// export default Nav;
module.exports = Nav; 