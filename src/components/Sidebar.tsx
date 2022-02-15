const React = require("react");
const useEffect = React.useEffect;
const useState = React.useState;

const Sidebar = () => {

  // set up the list of questions
  const [questionList, setQuestionList] = useState(null);
  
  // on load
  useEffect(() => {
    // fetch 
    fetch('httplocalhost:3000')
      .then(res => {
        const data: any = res.json;
        // assume format is array of questions
        // data : name, prompt, difficulty, solution, examples, design pattern
        // prop drill into sidebar question?
        const questionList = createQuestionList(data);
        setQuestionList(questionList);
        return;
      })

  })
  
  // function that takes the data from the fetch and changes state of questionList
  const createQuestionList = (data: string[]) => {
    let output: any;
    //if data exists
    if (data !== null) {
      // iterate and return
      for (let i = 0;  i < data.length; i++) {
        output.push(<li key={i} className="SidebarQuestions"><a href='./'>data[i]</a></li>)
      }
      return output;
    }
    return;
  }

  return (
  <div className='sidebar'>
    Sidebar
    <input type='text' placeholder='Search..' />
    {questionList ? <ul>{questionList}</ul> : ''}
  </div>

)};

// export default Sidebar;
module.exports = Sidebar; 