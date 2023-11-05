import React from 'react'
import Profilecard from './Profilecard'

const AboutPage = () => {
    return (
        <>
            <h1 className="text-3xl text-center mt-24">Meet Our Leadership Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 my-8">
                <Profilecard name={"Aman Asija"} profile={"Chief Executive Officer"} imageurl={"https://imgur.com/MUzgZq2.png"} />
                <Profilecard name={"Aman Asija"} profile={"Chief Executive Officer"} imageurl={"https://imgur.com/MUzgZq2.png"} />
                <Profilecard name={"Aman Asija"} profile={"Chief Executive Officer"} imageurl={"https://imgur.com/MUzgZq2.png"} />
            </div>
        </>
    )
}

export default AboutPage
