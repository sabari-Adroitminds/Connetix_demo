import { motion } from 'motion/react'
import React from 'react'
import TileGreenSquareSmall from '../../tiles/TileGreenSquareSmall'
import TileGreenTriangleSmall from '../../tiles/TileGreenTriangleSmall'
import TileLightGreenSquareSmall from '../../tiles/TileLightGreenSquareSmall'
import TilePurpleSquareBig from '../../tiles/TilePurpleSquareBig'
import TitleYellowTriangleSmall from '../../tiles/TitleYellowTriangelSmall'
import TileGreenSquareBig from '../../tiles/TileGreenSquareBig'
import TileYellowWindow from '../../tiles/TileYellowWindow'
import TileLightGreenSquareWithCircle from '../../tiles/TileLightGreenSquareWithCircle'
import EmptyTile from '../../tiles/EmptyTile'

interface IMainBlock {
    className?: string;
}

const MainBlock:React.FC<IMainBlock> = ({className}) => {
    const tiles = [
        { component: <TileLightGreenSquareSmall />, delay: 4 },
        { component: <TileGreenSquareSmall />, delay: 3.2 },
        { component: <TileYellowWindow />, delay: 3 },
        { component: <TileLightGreenSquareWithCircle />, delay: 2.5 },
        { component: <TileLightGreenSquareWithCircle />, delay: 2 },
        { component: <TileYellowWindow />, delay: 1.6 },
        { component: <TileGreenSquareSmall />, delay: 1 },
        { component: <TileLightGreenSquareSmall />, delay: 0.5 },
    ];
    const BottomTiles = [
        { component: <TileGreenSquareBig />, delay: 0.2 },
        { component: <TilePurpleSquareBig />, delay: 0.2 },
        { component: <TileGreenSquareBig />, delay: 0.2 },
        { component: <TilePurpleSquareBig />, delay: 0.2 },
    ];
    
  return (
      <div className={'flex flex-col items-end' + (className ? ` ${className}` : '')}>
        
          <div className='flex items-end justify-center w-full'>
              <motion.div initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 5 }}
              >
                  <TitleYellowTriangleSmall />
              </motion.div>
              <EmptyTile />
              <EmptyTile />
              <motion.div initial={{ opacity: 0, y: -350, }}
                  animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 5.5 }}
              >
                  <TileGreenTriangleSmall />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -300 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 6 }}
              >
                  <TileGreenTriangleSmall />
              </motion.div>
              <EmptyTile/>
              <EmptyTile />
              <motion.div initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 4.8 }}
              >
                  <TitleYellowTriangleSmall />
              </motion.div>
          </div>
          
        
          <div className="flex items-end">
              {tiles.map((tile, index) => {
                
                  const yOffset = index % 2 === 0 ? -100 * index : -300 * index;
                  const xOffset = index % 2 === 0 ? -100 * index : 100 * index;
                return(
                
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: yOffset, x: xOffset }}
                      animate={{ opacity: 1, y: 0 ,x: 0 }}
                      transition={{ duration: 3, delay: tile.delay }}
                  >
                      {tile.component}
                  </motion.div>
              )})}
          </div>
          <div className="flex items-end">
              {BottomTiles.map((tile, index) => {
                  const yOffset = -50 * index;
                return(
                
                  <motion.div
                      key={index}
                        initial={{ opacity: 0, y: yOffset }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.3, delay: tile.delay }}
                  >
                      {tile.component}
                  </motion.div>
              )})}
          </div>




      </div>
  )
}

export default MainBlock