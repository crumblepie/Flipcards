import * as React from "react";
import { useState } from "react";

const Flipcard_Btns = () => {
  const [number, setNumber] = useState(0);
  const [total, setTotal] = useState(5);

  return (
    <>
      <span className='card-footer'>
        <button id='btn back-button' onClick={() => setNumber(number - 1)}>
          Back
        </button>
        {/* <form>
          <label style={{ marginRight: "8px", fontSize: "0.9em" }}>
            Pattern:
          </label>
          <input
            type='text'
            className='card-input-box'
            placeholder='enter guess'
          />
        </form> */}
        <button id='btn next-button' onClick={() => setNumber(number + 1)}>
          Next
        </button>
      </span>
    </>
  );
};

export default Flipcard_Btns;
