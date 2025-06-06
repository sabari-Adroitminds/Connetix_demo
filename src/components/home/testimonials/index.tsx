import React from 'react'
import TestimonialSection from './TestimonialSection'


const Testimonials = () => {
    return (
        <>
            <div className='flex flex-col items-center my-10 ' >
                <h1 className=' !xl:text-[50px]/[82px] lg:text-[46px]/[78px] text-[32px]/[74px] -tracking-[1px] items-center '>
                    Hear from our community
                </h1>
            </div>
            <TestimonialSection/>
        </>
    )
}

export default Testimonials