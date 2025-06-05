'use client'

import React from 'react'
import { motion } from 'motion/react'
import TileYellowWindow from '../../tiles/TileYellowWindow'

import TileGreenTriangleBig from '../../tiles/TitleGreenTriangleBig'
import TileLightGreenSquareSmall from '../../tiles/TileLightGreenSquareSmall'
import TileYellowSquareSmall from '../../tiles/TileYellowSquareSmall'

const TowerOne = () => {
    const duration=1
    return (
        <div className='flex flex-col items-end'>
            <motion.div initial={{ opacity: 0, y: -150,  }}
                animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                transition={{ duration:duration, delay: 5}}
            >
                <TileGreenTriangleBig className='h-[156px] w-[73px]' />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration:duration, delay: 4 }}
            >
                <TileYellowWindow />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration:duration, delay: 2 }}
            >
                <TileLightGreenSquareSmall />
            </motion.div>
            <motion.div initial={{ opacity: 0, }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration:duration, delay: 1 }}
            >
                <TileYellowSquareSmall />
            </motion.div>




        </div>
    )
}

export default TowerOne