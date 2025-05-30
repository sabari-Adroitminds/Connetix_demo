'use client'
import { motion } from 'motion/react'
import React from 'react'
import TileYellowSquareSmall from '../../tiles/TileYellowSquareSmall'
import TileLightGreenSquareWithPlus from '../../tiles/TileLightGreenSquareWithPlus'
import TitleYellowTriangleBig from '../../tiles/TitleYellowTriangleBig'
import TileGreenSquareSmall from '../../tiles/TileGreenSquareSmall'

interface ITowerTwo {
    className?: string;
}

const TowerTwo:React.FC<ITowerTwo> = ({className}) => {
    const duration = 1
  return (
      <div className={'flex flex-col items-end' + (className ? ` ${className}` : '')}>
          <motion.div initial={{ opacity: 0, y: -150,  }}
              animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
              transition={{ duration: duration, delay: 5.5 }}
          >
              <TitleYellowTriangleBig />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration, delay: 3 }}
          >
              <TileLightGreenSquareWithPlus />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration, delay: 2 }}
          >
              <TileYellowSquareSmall />
          </motion.div>
          <motion.div initial={{ opacity: 0, }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration, delay: 1 }}
          >
              <TileGreenSquareSmall />
          </motion.div>




      </div>
  )
}

export default TowerTwo