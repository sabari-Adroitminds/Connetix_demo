'use client'
import { motion } from 'framer-motion';
import React from 'react';

import TileLightGreenSquareSmall from '../../tiles/TileLightGreenSquareSmall';
import TileLightGreenSquareBig from '../../tiles/TileLightGreenSquareBig';
import TilePurpleSquareBig from '../../tiles/TilePurpleSquareBig';
import TileGreenSquareSmall from '../../tiles/TileGreenSquareSmall';
import TileGreenTriangleSmall from '../../tiles/TileGreenTriangleSmall';
import TitleYellowTriangleSmall from '../../tiles/TitleYellowTriangelSmall';


const BuildingBlock = () => {
    return (
        <div className='flex flex-col items-end'>

            {/* Top: Triangles */}
            <div className='flex items-end'>
                <motion.div
                    initial={{ opacity: 0, y: -150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 5.5 }}
                >
                    <TileGreenTriangleSmall />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 6 }}
                >
                    <TitleYellowTriangleSmall />
                </motion.div>
            </div>

            {/* Middle: Small Squares */}
            <div className='flex items-end'>
                <motion.div
                    initial={{ opacity: 0, y: -150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 4 }}
                >
                    <TileLightGreenSquareSmall />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 4.5 }}
                >
                    <TileGreenSquareSmall />
                </motion.div>
            </div>

            {/* Bottom: Big Squares */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <TilePurpleSquareBig />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <TileLightGreenSquareBig />
            </motion.div>
        </div>
    );
};

export default BuildingBlock;
