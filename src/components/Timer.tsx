import * as React from "react";
import { useState, useEffect } from "react";

const Timer = (props: any) => {
  const [timer, setTimer] = React.useState(0);

  // useEffect(() =>{

  // }, [])

  return <div>Time Elapsed: 0:0{timer}</div>;
};

export default Timer;
