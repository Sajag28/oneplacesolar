import React from 'react'
import Faqs from './Faqs'

export const Faqssection = () => {
    return (
        <div className="min-h-[90vh] flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-8 font-semibold lg:text-4xl text-center">
                Frequently Asked Questions
            </h1>
            <Faqs />
        </div>
    )
}

export default Faqssection
