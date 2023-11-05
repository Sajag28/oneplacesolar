import React from 'react'
import Aboutus from './Aboutus'
import Highlights from './Highlights'
import Carousel from './Carousel'
import Services from './Services'
import Faqssection from './Faqssection'
import ContactForm from './Contactfrom'

const Home = () => {
    return (
        <>
            <Carousel />
            <Highlights />
            <Services />
            <Faqssection />
            <Aboutus />
            <ContactForm />
        </>
    )
}

export default Home