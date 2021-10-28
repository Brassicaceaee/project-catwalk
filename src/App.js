
import React from "react";
import { hot } from 'react-hot-loader/root';
import Reviews from './components/reviews/Reviews.js';
import Questions from './Questions_Component/Questions.js'

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <button type="button" class="btn btn-primary">
          This is a bootstrap button
        </button>
        <Questions/>
        <Reviews/>
      </>
    );
  }
}

export default hot(App);
