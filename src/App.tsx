import * as React from "react";
import { hot } from "react-hot-loader/root";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/* interface declares an object's shape. It's similar to class in JS
this file currently uses es5. In process of changing it over to es6
 */
interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Reinforcement Project</h1>
        <button type='button' className='btn btn-primary'>
          This is a bootstrap button
        </button>
      </>
    );
  }
}

export default hot(App);
