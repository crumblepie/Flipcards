import * as React from "react";
import { useState, useEffect } from "react";
// import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Card = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='card' id='card'>
        <h4 className='card-header'>Guess the problem solving pattern</h4>
        <div className='card-front'>
          <p className='question-title'>
            Longest Substring Without Repeating Characters
          </p>
          <p>Card {count} of 15</p>

          <div className='question-content'>
            Given a string <code>s</code>, find the length of the longest
            substring without repeating characters.
          </div>

          <div>Example 1:</div>
          {/* <div>
            Input: s = "abcabcbb" Output: 3 Explanation: The answer is "abc",
            with the length of 3.
          </div> */}
          <code className='code-block'>hello world!</code>
          <div>
            Example 2:
            <code className='code-block'>hello world!</code>
          </div>
        </div>
        <div className='card-footer'>
          <button className='card-nav-btns' onClick={() => setCount(count - 1)}>
            Back
          </button>
          <label>Pattern:</label>
          <input type='text' className='card-input-box' />
          <button className='card-nav-btns' onClick={() => setCount(count + 1)}>
            Next
          </button>
        </div>
      </div>
      {/* <div className='card-back'>Back</div> */}
      <div></div>
    </>
  );
};

export default Card;
