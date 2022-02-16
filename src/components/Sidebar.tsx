const React = require("react");
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from '../redux/store';
import { getQuestions } from "../redux/questionSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const Sidebar = () => {
 
  const dispatch = useAppDispatch();

  // pull from store
  const questions = useAppSelector(state => state.question.questions);
  
  // function that takes the data from the store and formats into jsx
  const createQuestionList = () => {
    const output = [];
    //if data exists
    if (questions !== null) {
      // iterate and return
      for (let i = 0;  i < questions.length; i++) {
        output.push(<li key={i} className="SidebarQuestions" onClick={statething}>{questions[i]}</li>)
      }
      return output;
    }
    return;
  }
  const statething = () => {
    dispatch(getQuestions('a'));
  }

  return (
  <div className='sidebar'>
    Sidebar
    <input type='text' placeholder='Search..' />
    {createQuestionList()}
  </div>

)};

// export default Sidebar;
module.exports = Sidebar; 