import React from 'react'

const Servicecard = ({ title, imagesrc, description }) => {
    return (
        // <div className="card bg-base-100 m-4 shadow-lg image-full hover:shadow-blue-400 place-items-center cursor-pointer overflow-hidden">
        //     <figure className="w-full ar-1 mx-auto overflow-visible">
        //         <img src={imagesrc} alt={title} />
        //     </figure>
        //     <div className="card-body hero-overlay items-center hover:bg-base-100 hover:bg-opacity-90 text-center text-info-content opacity-0 hover:opacity-100 justify-center">
        //         <h2 className="card-title text-3xl font-semibold">{title}</h2>
        //         <p className="flex-grow-0 h-fit">{description}</p>
        //     </div>
        // </div>

        <div className="card w-96 bg-base-100 shadow-lg shadow-blue-400">
            <figure><img src={imagesrc} alt={imagesrc} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Servicecard