import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar({percentage}) {
  return (
    <div className='progress'>
        <CircularProgressbar value={percentage} text={`${percentage}%`}
        styles={buildStyles({
         
    
            pathColor: `#9FA4C4`,
            textColor: 'black',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })} />
    </div>
  )
}

export default ProgressBar