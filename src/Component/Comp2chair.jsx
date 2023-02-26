import React from 'react'
import './Comp2chair.css'
const Comp2chair = (props) => {
  return (
    <div className='Comp2chair' style={{
      backgroundImage: `url(${props.bgchair})`
    }}>
        <div className='ContextDiv'>
            <h1>{props.hedding}</h1>
            <h3>{props.subhed}</h3>
            <p>{props.pra}</p>
            <button><b>{props.btg}</b></button>
        </div>
    </div>
  )
}

export default Comp2chair;