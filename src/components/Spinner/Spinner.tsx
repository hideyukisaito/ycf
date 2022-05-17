import classNames from 'classnames'
import React from 'react'

export const Spinner: React.FC = () => {
  return (
    <div className={classNames(
      'absolute',
      'w-full', 'h-full',
      'flex', 'flex-col', 'justify-start', 'items-center', 'gap-8'
    )}>
      <p className={classNames(
        'text-xl'
      )}>送信中…</p>

      <div className={classNames(
        'animate-spin',
        'animate-ping',
        'w-8', 'h-8',
        'bg-black',
        'rounded-[15px]',
      )} />
    </div>
  )
}
