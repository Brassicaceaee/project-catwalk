import React from 'react';
import './navigator.css'

const NavBar = () => {



  return(
      <div className='navbar'>
        <h1>Brassicaceae</h1>
        <div className='navbar-right'>
          <a href='#related'>Related</a>
          <a href='#search'>Q & A</a>
          <a href='#reviewsWidget'>Review</a>
        </div>
      </div>
  )

}



export default NavBar;