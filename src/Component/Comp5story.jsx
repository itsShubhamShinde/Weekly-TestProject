import React from 'react'
import './Comp5story.css';

const Comp5story = (props) => {
    return (
        <div className='Comp5story'>
            <div className='Comp5LeftDiv'>
                <h1>{props.h1}</h1>
                {/* <h1>CRED begins</h1> */}
                {/* <h1> with trust.</h1> */}
            </div>
            <div className='Comp5RightDiv'>
                <p>{props.p1}</p>
                <p>{props.p2}</p>
                <p>{props.p3}</p>
            </div>
        </div>
    )
}

export default Comp5story;