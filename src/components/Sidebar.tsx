const React = require("react");
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const Sidebar = () => {
 
  // on load
  const questions = useAppSelector(state => state.question.questions);
  console.log(questions);
  
  // function that takes the data from the fetch and changes state of questionList
  const createQuestionList = () => {
    const output = [];
    //if data exists
    if (questions !== null) {
      // iterate and return
      for (let i = 0;  i < questions.length; i++) {
        output.push(<li key={i} className="SidebarQuestions"><a href='./'>{questions[i]}</a></li>)
      }
      return output;
    }
    return;
  }

  return (
  <div className='sidebar'>
    Sidebar
    <input type='text' placeholder='Search..' />
    {createQuestionList()}
  </div>

)};

export default Sidebar;