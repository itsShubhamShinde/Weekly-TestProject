import React from 'react';
import './Comp4slider.css'

const Comp4slider = (props) => {
  return (
    <div className='Comp4slider'>
        <div className='comp4LeftDiv'>
            <h1>{props.slideh1}</h1>
            <p>{props.slidePara}</p>
        </div>
        
        
        
        
        <div className='comp4RightDiv' >
            <img src={props.display}/>
        </div>
    </div>
  )
}

export default Comp4slider;