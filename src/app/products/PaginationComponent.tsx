'use client';

import Pagination from '@/components/ui/pagination'
import React, { useState } from 'react'

const PaginationComponent = () => {
    const [pages,setPage]=useState(1)
  return (
      <Pagination
          currentPage={pages}
          totalPages={5}
            onPageChange={(page) => setPage(page)}
          
      />
  )
}

export default PaginationComponent