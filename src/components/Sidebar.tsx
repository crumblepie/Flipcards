const React = require("react");
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "../redux/store";
import { setFlipCardIndex } from "../redux/questionSlice";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Sidebar = () => {
  const dispatch = useAppDispatch();

  // pull from store
  const questions = useAppSelector((state) => state.question.questions);

  const changeFlipCardIndex = (num: number) => {
    dispatch(setFlipCardIndex(num));
  };

  // function that takes the data from the store and formats into jsx
  const createQuestionList = () => {
    const output = [];
    //if data exists
    if (questions.length !== 1) {
      // iterate and return
      for (let i = 0; i < questions.length; i++) {
        output.push(
          <li
            key={i}
            className='SidebarQuestions'
            onClick={() => changeFlipCardIndex(i)}
          >
            {questions[i].name}
          </li>
        );
      }
      return output;
    } else {
      return (
        <li key={1} className='SidebarQuestions'>
          Loading...
        </li>
      );
    }
    return;
  };

  return (
    <div className='sidebar'>
      {/* <input type='text' className='searchBox' placeholder='Search..' /> */}
      {createQuestionList()}
    </div>
  );
};

<<<<<<< HEAD
)};

export default Sidebar;
// module.exports = Sidebar; 
=======
export default Sidebar;
>>>>>>> 866b7e29c6b502a46df40133d5f5cb97a1cd5706
