import * as React from "react";
import { useState, useEffect } from "react";
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

const Card = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <div className='main_card' id='main_card'>
        <h4 className='card-header'>Guess the problem solving pattern</h4>
        <div className='card-front'>
          <div className='question-title'>question_title</div>
          <span>Card {number} of 15</span>
          <span>Difficulty: difficulty</span>

          <div className='question-content'>description</div>

          <div className='example_label'>Example 1:</div>
          <code className='code-block'>example_1</code>
          <div className='example_label'>Example 2:</div>
          <code className='code-block'>example_2</code>

          <div className='card-footer'>
            <button
              className='card-nav-btns'
              id='back-button'
              onClick={() => setNumber(number - 1)}
            >
              Back
            </button>
            <label>Pattern:</label>
            <input
              type='text'
              className='card-input-box'
              placeholder='enter guess'
            />
            <button
              className='card-nav-btns'
              id='next-button'
              onClick={() => setNumber(number + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className='card-back'>pattern</div>
      <div></div>
    </>
  );
};

export default Card;
