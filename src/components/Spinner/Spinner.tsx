import classNames from 'classnames'
import React from 'react'

export const Spinner: React.FC = () => {
  return (
    <div className={classNames(
      'absolute',
      'w-full', 'h-full',
      'flex', 'flex-col', 'justify-start', 'items-center', 'gap-8',
      'mt-16', 'lg:mt-0',
      'animate-pulse',
    )}>
      <p className={classNames(
        'text-base', 'lg:text-xl'
      )}>送信中…</p>

      <div className={classNames(
        'animate-spin',
        'w-16', 'h-16',
        'bg-black',
        'rounded-[30px]',
      )} />
    </div>
  )
}
