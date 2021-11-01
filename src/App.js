
import React from "react";
import { hot } from 'react-hot-loader/root';
import Reviews from './components/reviews/Reviews.js';
import Questions from './components/questions/Questions.js'
import Overview from './components/overview/overview.jsx'

import Related from './components/related/Related.jsx'

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>

        <h1>
        Brassicaceae
        </h1>

        <Overview />
        <Related />
        <Questions/>
        <Reviews/>
      </>
    );
  }
}

export default hot(App);
