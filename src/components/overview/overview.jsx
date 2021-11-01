import React from 'react';


const Overview = (props) => {
  var overviewStyle = {

      margin:  'auto 10%',
      height: '950px',
      border: '2px solid green',
      display: 'grid',
      gap: '10px',
      // grid-template-columns: 'repeat(2, 1fr)',
      // grid-auto-rows: 'minmax(100px, auto)',

  }
  return(
    <div className='overview' style={overviewStyle}>
      <div className='Image'>Image</div>
      <div className='PrductInfo'>ProdcutInfo</div>
      <div className='DescriptionOne'>ProductDescription</div>
      <div className='DescriptionTwo'></div>
    </div>
  )
}


export default Overview;