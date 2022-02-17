import * as React from "react";
import { useState, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Timer = (props: any) => {
  const flipCardIndex = useAppSelector((state) => state.question.flipCardIndex);

  const [timer, setTimer] = React.useState(0);

  function reset() {
    setTimer(0);
  }

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }, [flipCardIndex]);

  return <div className='timer'>Time elapsed: {timer} seconds</div>;
};

export default Timer;