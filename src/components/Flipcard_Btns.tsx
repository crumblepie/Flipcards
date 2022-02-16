import * as React from "react";
import { useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { setFlipCardIndex } from "../redux/questionSlice";


const Flipcard_Btns = () => {
  const dispatch = useAppDispatch();

  const flipCardIndex = useAppSelector((state) => state.question.flipCardIndex);

  const changeIndex = (num: number) => {
    dispatch(setFlipCardIndex(num));
  }

  return (
    <>
      <span className='card-footer'>
        <button id='btn back-button' onClick={() => changeIndex(flipCardIndex-1)}>
          Back
        </button>

        <button id='btn next-button' onClick={() => changeIndex(flipCardIndex+1)}>
          Next
        </button>
      </span>
    </>
  );
};

export default Flipcard_Btns;
