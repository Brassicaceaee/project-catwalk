
import React, { useState, useEffect } from "react";
import { hot } from 'react-hot-loader/root';
import Reviews from './components/reviews/Reviews.jsx';
import Questions from './components/questions/Questions.jsx';
import Overview from './components/overview/overview.jsx'
import {ProductProvider} from './context/ProductContext.jsx'
import Related from './components/related/Related.jsx'
import NavigatorBar from './components/navigator/NavigatorBar.jsx'


const App = () => {

  return (
      <ProductProvider>
        <h1>
        Brassicaceae
        </h1>
        <NavigatorBar />
        <Overview />
        <Related />
        <Questions/>
        <Reviews/>
      </ProductProvider>
  );
}

export default hot(App);
