import React from 'react';
import IconPromoBox from './IconPromoBox';
import { Button } from '@/components/ui/button';

const PromoBox: React.FC = () => {
    return (
        <div className="relative m-auto lg:m-0  bg-primary-tint md:p-10 md:px-4 px-2 pt-8 rounded-lg shadow-md text-center flex flex-col justify-baseline md:justify-between max-w-[370px] md:max-w-[748px] md:w-full md:max-h-[705px] min-h-[650px] lg:min-h-full xl:min-h-[600px] h-full">
            <div>
                <h2 className="relative z-10 text-lg font-semibold text-gray-800 mb-2 md:w-[462px] w-[319px]  text-center md:text-start">
                    Explore ideas, inspiration & free resources.
                </h2>
            </div>
            <IconPromoBox className='absolute  -bottom-25 md:top-0 lg:top-20 xl:top-0 left-0  w-full   lg:h-[400px] xl:h-full' />
            <div className=" relative mt-4 flex justify-center flex-wrap gap-2">
                <Button className=' w-full md:max-w-[194px]'>
                    Be inspired
                </Button>
                <Button className=' w-full md:max-w-[194px]'>
                    Build ideas
                </Button>
                <Button className=' w-full md:max-w-[194px]' >
                    Free resources
                </Button>
            </div>

        </div>
    );
};

export default PromoBox;
