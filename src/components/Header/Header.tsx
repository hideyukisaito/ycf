import { Link } from 'react-router-dom'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <div
      className='
        w-full
        inline-flex flex-col items-start justify-center
        px-6 md:px-10
        py-4 md:py-8
        bg-white
        shadow
      '
    >
      <Link to='/'>
        <p className='text-lg md:text-2xl font-bold'>Example Inc.</p>
      </Link>
    </div>
  )
}
