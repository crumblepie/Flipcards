import * as React from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// import "../stylesheets/Flipcard.css";
// import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const FlipCard = () => {
  const questions = useAppSelector((state) => state.question.questions);
  const flipCardIndex = useAppSelector((state) => state.question.flipCardIndex);

  const toggleHandler = () => {
    // ! is needed after expression to override TypeScript error
    // of Object being possibly null
    var card = document.getElementById("main_card")!;
    card.classList.toggle("flipped");
  };

  const solution = `const twoSum = (array, goal) => { let mapOfNumbers = {};
        let twoIndexes = [];

        for (let i = 0; i < array.length; i++) {
        mapOfNumbers[array[i]] = i;
    }

    for (let i = 0; i < array.length; i++) {
          let target = goal - arr[i];
      if(mapOfNumbers[target] !== null && mapOfNumbers[target] !== i) {
        twoIndexes.push(i);
            twoIndexes.push(mapOfNumbers[target]);
      }
        }

      return twoIndexes;
}`;

  return (
    <>
      <div className='main_card_container'>
        <div className='main_card' id='main_card' onClick={toggleHandler}>
          <div className='card__face card-front'>
            <h4 className='card-header'>Guess the problem solving pattern</h4>
            <div className='card-content'>
              <div className='question-title'>
                {questions[flipCardIndex].name}
              </div>
              <div className='question-meta-data'>
                <span>Difficulty: {questions[flipCardIndex].difficulty}</span>
                <span>
                  Card {flipCardIndex + 1} of {questions.length}
                </span>
              </div>
              <div className='question-content'>
                {questions[flipCardIndex].prompt}
              </div>

              <div className='example_label'>Example 1:</div>
              <code className='code-block'>Example 1</code>
              <div className='example_label'>Example 2:</div>
              <code className='code-block'>Example 2</code>
            </div>
          </div>

          <div className='card__face card-back'>
            <h4 className='card-back-header'>Answer</h4>
            {questions[flipCardIndex].pattern}
            <code className='code-block solution'>{solution}</code>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
