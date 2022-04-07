
import React, { Suspense } from "react";
import { hot } from 'react-hot-loader/root';
import { OverviewProvider } from "./context/OverviewContext.jsx";
// import Reviews from './components/reviews/Reviews.jsx';
// import Questions from './components/questions/Questions.jsx';
// import Overview from './components/overview/overview.jsx'
import {ProductProvider} from './context/ProductContext.jsx'
// import Related from './components/related/Related.jsx'
// import NavBar from './components/navigator/NavBar.jsx'
const Reviews = React.lazy(() => import('./components/reviews/Reviews.jsx'))
const Questions = React.lazy(() => import('./components/questions/Questions.jsx'))
const Related = React.lazy(() => import('./components/related/Related.jsx'))
const Overview = React.lazy(() => import('./components/overview/overview.jsx'));
const NavBar = React.lazy(() => import('./components/navigator/NavBar.jsx'));
const App = () => {

  return (
      <ProductProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <OverviewProvider>
            <Overview />
          </OverviewProvider>
          <Related />
          <Questions/>
          <Reviews/>
        </Suspense>
      </ProductProvider>
  );
}

export default hot(App);
