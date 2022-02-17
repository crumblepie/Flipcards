import * as React from "react";
import { useState } from "react";
import Timer from "./Timer";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdCatchingPokemon } from "react-icons/md";
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
      <h2>Flipcard</h2>
      {/* <Timer /> */}
      <FaSun onClick={themeToggle} style={{ color: "var(--sunColor" }} />
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

export default Nav;
