import { Link, useLocation } from 'react-router-dom'
import React from 'react'

export const Header: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <div
      className='
        w-full
        inline-flex flex-row items-center justify-between
        px-6 md:px-10
        py-4 md:py-8
        bg-white
        shadow
      '
    >
      <Link to='/'>
        <p className='text-lg md:text-2xl font-bold'>Example Inc.</p>
      </Link>

      {!pathname.includes('contact') &&
        <Link to='/contact'>
          <p className='text-sm md:text-base'>お問い合わせ</p>
        </Link>
      }
    </div>
  )
}
