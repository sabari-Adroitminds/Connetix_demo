import Search from '@/components/common/Search'
import SortBySelect from '@/components/common/select'
import clsx from 'clsx'

import React from 'react'

interface ISearchAndSortProps {
    mobileStyle?:boolean
}

const SearchAndSort: React.FC<ISearchAndSortProps> = ({ mobileStyle }) => {
  return (
      <div className='flex items-center md:gap-4  justify-center min-w-full   '>
          <Search className={clsx(mobileStyle?'rounded-none  border-l-0  ':'min-w-[300px] w-full h-[50px]') } />
          <SortBySelect className={clsx(mobileStyle ? 'rounded-none   border-r-0':'min-w-[300px] w-full h-[50px]')} label={"Sort By"} options={['Price Low to High', 'Price High to Low', 'Highest Rated', 'Lowest Rated', 'Most Popular']} />
    </div>
  )
}

export default SearchAndSort