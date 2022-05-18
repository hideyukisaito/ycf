import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export const ContactFormCompletion: React.FC = () => {
  return (
    <div className={classNames(
      'flex', 'flex-col', 'items-center', 'gap-8',
      'py-8', 'lg:py-12',
      'activate',
    )}>
      <header className='s14-mb-16'>
        <h1 className='lg:text-xl'>お問い合わせを受け付けました。</h1>
      </header>

      <Link to='/' className='relative w-full'>
        <button className={classNames(
          'flex', 'justify-center', 'self-center',
          'py-4', 'lg:px-12', 'lg:py-4',
          'w-full',
          'bg-black', 'disabled:bg-gray-200', 'active:bg-gray-500', 'lg:hover:bg-gray-400',
          'text-white', 'text-bold',
          'lg:text-base',
          'rounded-md',
          'lg:transition-colors', 'lg:duration-200',
        )}>
          トップへ戻る
        </button>
      </Link>
    </div>
  )
}
