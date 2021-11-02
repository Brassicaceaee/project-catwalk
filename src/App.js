
import React from "react";
import { hot } from 'react-hot-loader/root';
import Reviews from './components/reviews/Reviews.jsx';
import Questions from './components/questions/Questions.jsx';
import Overview from './components/overview/overview.jsx'

import Related from './components/related/Related.jsx'

class App extends React.Component {
  render() {
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
