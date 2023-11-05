import React from 'react'
import Highlightcard from './Highlightcard'

export const Highlights = () => {
    return (
        <div className="p-4 min-h-[90vh] flex flex-col">
            <h1 className="text-3xl mb-8 font-semibold lg:text-4xl text-center">
                Our Main Highlights
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:px-8 space-y-2">
                <Highlightcard title={"Faster Turnaround Time"} description={"Get your permit design in less than 6 Hours!"} imagesrc={"https://imgur.com/ZHIBlF2.png"} />
                <Highlightcard title={"24X7 Services"} description={"Enjoy your weekends by setting up your work with us."} imagesrc={"https://imgur.com/ZHIBlF2.png"} />
                <Highlightcard title={"Better Accuracy & Quality"} description={"Get your plans approved at our 98% AHJ Success rate."} imagesrc={"https://imgur.com/jyGvuTU.png"} />
            </div>
        </div>
    )
}

export default Highlights
