import React from 'react'
import { AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'

const Profilecard = ({name,profile,imageurl}) => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={imageurl} alt="Shoes" width="200" height="200" /></figure>
                <div className="card-body justify-center items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{profile}</p>
                    <div className="grid grid-flow-col mx-auto md:mx-0 gap-4 md:place-self-center md:justify-self-end">
                        <a href="https://www.instagram.com/oneplacesolar/" target="_blank"><BsInstagram size={30} /></a>
                        <a href="https://www.linkedin.com/company/one-place-solar/" target="_blank"><AiOutlineLinkedin size={30} /></a>
                        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FOnePlaceSolar" target="_blank"><FiTwitter size={30} /></a>
                        <a href="https://www.youtube.com/@oneplacesolar" target="_blank"><AiOutlineYoutube size={33} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profilecard
