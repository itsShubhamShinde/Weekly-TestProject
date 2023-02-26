import React from 'react'
import './Comp3brand.css'

const Comp3brand = (props) => {
  return (
    <div className='Comp3brand'>
        <p><b>rewards from brands you love.</b></p>
        <img src={props.brandlogo}/>
    </div>
  )
}

export default Comp3brand;