import { motion } from 'motion/react'
import React from 'react'
import TileGreenTriangleSmall from '../../tiles/TileGreenTriangleSmall'
import TileLightGreenSquareSmall from '../../tiles/TileLightGreenSquareSmall'
import TilePurpleSquareSmall from '../../tiles/TilePurpleSquareSmall'
import TitleYellowTriangleSmall from '../../tiles/TitleYellowTriangelSmall'

interface IMiniBlockTwo {
  className?: string;
}

const MiniBlockTwo:React.FC<IMiniBlockTwo> = ({className}) => {
  return (
    <div className={'flex flex-col items-end' + (className ? ` ${className}` : '')}>
      <motion.div initial={{ opacity: 0, y: -150, }}
        animate={{ opacity: 1, y: 62, x: -39, rotate: 180 }}
        transition={{ duration: 1.5, delay: 5 }}
      >
        <TitleYellowTriangleSmall />
       
      </motion.div>
      <div className='flex items-end justify-center w-full'>
        <motion.div initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.4, delay: 3 }}
        >
          <TileGreenTriangleSmall />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.2, delay: 4}}
        >
          <TileGreenTriangleSmall />
        </motion.div>
      </div>
      <div className='flex items-end'>
        <motion.div initial={{ opacity: 0, y: -150, }}
          animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <TileLightGreenSquareSmall />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 2 }}
        >
          <TilePurpleSquareSmall />
        </motion.div>
      </div>

    </div>
  )
}

export default MiniBlockTwo