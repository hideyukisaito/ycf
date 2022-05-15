import React from 'react'

const Header: React.FC = () => {
  return (
    <div
      className='
        w-screen
        inline-flex flex-col items-start justify-center
        px-6 md:px-10
        py-4 md:py-8
        bg-white
        shadow
      '
    >
      <p className='text-lg md:text-2xl font-bold'>Example Inc.</p>
    </div>
  )
}

export default Header
