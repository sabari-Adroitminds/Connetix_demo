import React from 'react'
import ConnetixGrid from './ConnetixGrid'
import PromoBox from './PromoBox'

const MediaGrid = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 justify-center items-center p-2'>
            <ConnetixGrid
                videoSrc="/videos/play-learn-connect/play-learn-connect(1).mp4"
                images={[
                    '/images/play-learn-connect/play-learn-connect.jpg',
                    '/images/play-learn-connect/play-learn-connect-2.png',
                ]}
            />
            <ConnetixGrid
                className='[direction:rtl] lg:[direction:ltr]'
                videoSrc="/videos/play-learn-connect/play-learn-connect.mp4"
                images={[
                    '/images/play-learn-connect/play-learn-connect-3.png',
                    '/images/play-learn-connect/play-learn-connect-4.png',
                ]}
            />
            <PromoBox />
            <ConnetixGrid
                className='hidden lg:grid'
                videoSrc="/videos/play-learn-connect/play-learn-connect-3.mp4"
                images={[
                    '/images/play-learn-connect/play-learn-connect-6.jpg',
                    '/images/play-learn-connect/play-learn-connect-7.jpg',
                ]}
            />
        </div>
    )
}

export default MediaGrid