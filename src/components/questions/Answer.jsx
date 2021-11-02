import React from 'react';

const Answer = (props) => {

  return(
    <li>
      <div>
        {props.answer.body}
      </div>
      <div>by [username], [date here]
      <button>Helpful</button>
      <button>Report</button>
      </div>
    </li>
  )
};

export default Answer;