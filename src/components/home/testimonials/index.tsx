import React from 'react'
import TestimonialSection from './TestimonialSection'


const Testimonials = () => {
    return (
        <>
            <div className='flex flex-col items-center my-10 ' >
                <p className=' xl:text-[50px]/[82px] lg:text-[46px]/[78px] text-[32px]/[74px]  font-[350px]  -tracking-[1px] items-center '>
                    Hear from our community
                </p>
            </div>
            <TestimonialSection/>
        </>
    )
}

export default Testimonials