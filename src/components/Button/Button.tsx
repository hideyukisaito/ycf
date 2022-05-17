import classNames from 'classnames'
import React from 'react'

type TProps = {
  label: string
  fill?: boolean
  disabled?: boolean
  onClick?: (e: any) => void
}

export const Button: React.FC<TProps> = ({
  label,
  fill = true,
  onClick = undefined,
  disabled = false,
}) => {
  return (
    <button
      className={classNames(
        'flex', 'justify-center', 'self-center',
        'py-4', 'lg:px-12', 'lg:py-6',
        'w-full',
        fill
          ? 'bg-black text-white disabled:bg-gray-200 active:bg-gray-500 lg:hover:bg-gray-400'
          : 'bg-white border-black border-solid border-2 text-black disabled:bg-gray-200 active:bg-white lg:hover:bg-black lg:hover:text-white',
        'font-bold',
        'lg:text-base',
        'rounded-md',
        'lg:transition-colors', 'lg:duration-200',
        'disabled:hidden',
        'disabled:cursor-not-allowed',
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
