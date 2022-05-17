import classNames from 'classnames'
import React from 'react'

type TProps = {
  message: string | undefined
}

const ErorrLabel: React.FC<TProps> = ({ message }) => {
  if (message?.length === 0) return null

  return (
    <span className={classNames(
      'inline-block',
      'ml-2', 'mb-2',
      'font-bold', 'text-xs', 'lg:text-sm',
      'text-error',
    )}>※{message}</span>
  )
}

export default ErorrLabel
