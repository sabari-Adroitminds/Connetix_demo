import React from 'react'
import TowerOne from './TowerOne'
import TowerTwo from './TowerTwo'
import BuildingBlock from './BuildingBlock'

interface IBuilding {
  className?: string;
}

const Building:React.FC<IBuilding> = ({className}) => {
  return (
    <div className={'flex items-end' + (className ? ` ${className}` : '')}>
      <TowerOne/>
      <BuildingBlock/>
      <TowerTwo/>
    </div>
  )
}

export default Building