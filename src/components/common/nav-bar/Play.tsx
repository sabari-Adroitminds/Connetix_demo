import React from 'react'



import { Button } from '@/components/ui/button';
import EducationDiscountCard from './components/EducationDiscountCard';
import SubMenuCard from './components/SubMenuCard';
import { playTileData } from './constant';


const Play = () => {
    return (
        <>
            <SubMenuCard data={playTileData}>
                <div className='flex flex-col justify-between h-full  '>
                <div className='p-4 gap-4 flex flex-col items-start max-w-[412px]'>
                    <h1 className='text-[50px]'>Connetix
                        Play Zone</h1>
                    <p className='text-[16px] font-[500]  text-custom-gray '>The imagination is limitless, and we’ve got ideas galore to keep you and your children entertained for hours.</p>
                    <div className='flex gap-4 mt-4'>
                        <Button className='text-[18px] w-[212px]' variant={'primary'}>
                            Explore the Play Zone
                        </Button>

                    </div>
                   
                </div>
             
                    <EducationDiscountCard />
                
                </div>
            </SubMenuCard>
        </>
    )
}

export default Play