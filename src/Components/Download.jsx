import React from 'react'
import { BiSolidDownload } from 'react-icons/bi'

const Download = ({ Documentname }) => {
    return (
        <>
            <div className="alert shadow-lg">
                <h3 className="font-bold">{Documentname}</h3>
                <button className="btn btn-sm"><BiSolidDownload size={30} />Download</button>
            </div>
        </>
    )
}

export default Download