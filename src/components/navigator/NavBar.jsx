import React from 'react';
import './navigator.css'

const NavBar = () => {



  return(
      <div className='navbar'>
        <h1>Brassicaceae</h1>
        <div className='navbar-right'>
          <a href='#related' style={{ textDecoration: 'none', color: 'red'}} >Related</a>
          <a href='#search' style={{ textDecoration: 'none', color: 'red'}}>Q & A</a>
          <a href='#review' style={{ textDecoration: 'none', color: 'red'}}>Review</a>
        </div>
      </div>
  )

}



export default NavBar;