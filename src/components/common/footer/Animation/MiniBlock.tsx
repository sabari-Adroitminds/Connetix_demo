'use client'

import { motion } from 'motion/react'
import React from 'react'
import TileLightGreenSquareSmall from '../../tiles/TileLightGreenSquareSmall'
import TileGreenTriangleSmall from '../../tiles/TileGreenTriangleSmall'
import TitleYellowTriangleSmall from '../../tiles/TitleYellowTriangelSmall'
import TilePurpleSquareSmall from '../../tiles/TilePurpleSquareSmall'

interface IMiniBlock {
    className?: string;
    }

const MiniBlock:React.FC<IMiniBlock> = ({className}) => {
  return (
      <div className={'flex flex-col items-end' + (className ? ` ${className}` : '')}>
          <motion.div initial={{ opacity: 0, y: -150, }}
              animate={{ opacity: 1, y: 64, x: -34, rotate: 180 }}
              transition={{ duration: 1.5, delay: 6 }}
          >
              <TileGreenTriangleSmall />
          </motion.div>
          <div className='flex items-end justify-center w-full'>
              <motion.div initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 ,x:-4}}
                  transition={{ duration: 1.3, delay: 4 }}
              >
                  <TitleYellowTriangleSmall />
              </motion.div>
             
              <motion.div initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0, x: 4 }}
                  transition={{ duration: 1.2, delay: 3 }}
              >
                  <TitleYellowTriangleSmall />
              </motion.div>
          </div>
          <div className='flex items-end'>
              <motion.div initial={{ opacity: 0, y: -200, }}
                  animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 2 }}
              >
                  <TileLightGreenSquareSmall />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
              >
                  <TilePurpleSquareSmall />
              </motion.div>
          </div>

      </div>
  )
}

export default MiniBlock