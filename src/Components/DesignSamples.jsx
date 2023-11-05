import React from 'react'
import Download from './Download'

const DesignSamples = () => {
    return (
        <>
            <h1 className="text-3xl text-center mt-24">Design Samples</h1>
            <div className="grid mx-auto gap-8 my-8">
                <Download Documentname={"Rooftop PV_Design Sample"} />
                <Download Documentname={"Rooftop PV_Design Sample"} />
                <Download Documentname={"Rooftop PV_Design Sample"} />
                <Download Documentname={"Rooftop PV_Design Sample"} />
            </div>


        </>
    )
}

export default DesignSamples
