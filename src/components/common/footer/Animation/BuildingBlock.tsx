'use client'
import { motion } from 'motion/react'
import React from 'react'
import TileLightGreenSquareSmall from '../../tiles/TileLightGreenSquareSmall'
import TileLightGreenSquareBig from '../../tiles/TileLightGreenSquareBig'
import TilePurpleSquareBig from '../../tiles/TilePurpleSquareBig'
import TileGreenSquareSmall from '../../tiles/TileGreenSquareSmall'
import TileGreenTriangleSmall from '../../tiles/TileGreenTriangleSmall'
import TitleYellowTriangleSmall from '../../tiles/TitleYellowTriangelSmall'

const BuildingBlock = () => {
  return (
      <div className='flex flex-col items-end'>
          <div className='flex items-end'>
              <motion.div initial={{ opacity: 0, y: -150, }}
                  animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                  transition={{ duration: 1, delay: 5.5 }}
              >
                  <TileGreenTriangleSmall />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 6 }}
              >
                  <TitleYellowTriangleSmall />
              </motion.div>
          </div>
        <div className='flex items-end'>
          <motion.div initial={{ opacity: 0, y: -150, }}
              animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 4 }}
          >
              <TileLightGreenSquareSmall />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.5 }}
          >
              <TileGreenSquareSmall />
          </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
          >
              <TilePurpleSquareBig />
          </motion.div>
          <motion.div initial={{ opacity: 0, }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
          >
              <TileLightGreenSquareBig />
          </motion.div>




      </div>
  )
}

export default BuildingBlock