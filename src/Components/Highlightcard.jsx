import React from 'react'

export const Highlightcard = ({title,description,imagesrc}) => {
    return (
        <div className="card w-96 glass">
            <figure><img src={imagesrc} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Highlightcard
