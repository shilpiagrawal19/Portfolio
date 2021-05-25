import React from 'react'
import Bounce from 'react-reveal/Bounce';


export default function Title({title, span}) {
    return (
        <Bounce top>
        <div className="Title">
            <h3>
                {title}
                <span> {span}</span>
            </h3>
        </div>
        </Bounce>
    )
}
