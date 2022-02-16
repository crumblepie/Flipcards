import * as React from "react";
import { useState, useEffect } from "react";
// import "../stylesheets/Flipcard.css";
// import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

// export interface Props {
//   question_title: string;
//   description: string;
//   number: number;
//   example_1: string;
//   example_2: string;
//   difficulty: string;
//   pattern: string;
// }

// const Card = (props: Props) => {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div className='main_card' id='main_card'>
//         <h4 className='card-header'>Guess the problem solving pattern</h4>
//         <div className='card-front'>
//           <p className='question-title'>{props.question_title}</p>
//           <p>Card {props.number} of 15</p>
//           <p>{props.difficulty}</p>

//           <div className='question-content'>{props.description}</div>

//           <div>Example 1:</div>
//           <code className='code-block'>{props.example_1}</code>
//           <div>Example 2:</div>
//           <code className='code-block'>{props.example_1}</code>
//         </div>
//         <div className='card-footer'>
//           <button className='card-nav-btns' onClick={() => setCount(count - 1)}>
//             Back
//           </button>
//           <label>Pattern:</label>
//           <input type='text' className='card-input-box' />
//           <button className='card-nav-btns' onClick={() => setCount(count + 1)}>
//             Next
//           </button>
//         </div>
//       </div>
//       <div className='card-back'>{props.pattern}</div>
//       <div></div>
//     </>
//   );
// };

// export default Card;

const FlipCard = () => {
  const [number, setNumber] = useState(0);
  const [total, setTotal] = useState(5);

  const toggleHandler = () => {
    // ! is needed after expression to override TypeScript error
    // of Object being possibly null
    var card = document.getElementById("main_card")!;
    card.classList.toggle("is-flipped");
  };

  return (
    <>
      <div className='main_card_container'>
        <div className='main_card' id='main_card' onClick={toggleHandler}>
          <div className='card__face card-front'>
            <h4 className='card-header'>Guess the problem solving pattern</h4>
            <div className='card-content'>
              <div className='question-title'>question_title</div>
              <div className='question-meta-data'>
                <span>Difficulty: difficulty</span>
                <span>
                  Card {number} of {total}
                </span>
              </div>
              <div className='question-content'>description</div>

              <div className='example_label'>Example 1:</div>
              <code className='code-block'>example_1</code>
              <div className='example_label'>Example 2:</div>
              <code className='code-block'>example_2</code>

              <span className='card-footer'>
                <button id='back-button' onClick={() => setNumber(number - 1)}>
                  Back
                </button>
                <form>
                  <label style={{ marginRight: "8px", fontSize: "0.9em" }}>
                    Pattern:
                  </label>
                  <input
                    type='text'
                    className='card-input-box'
                    placeholder='enter guess'
                  />
                </form>
                <button id='next-button' onClick={() => setNumber(number + 1)}>
                  Next
                </button>
              </span>
            </div>
          </div>

          <div className='card__face card-back'>
            <h4 className='card-back-header'>Answer</h4>
            pattern
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
