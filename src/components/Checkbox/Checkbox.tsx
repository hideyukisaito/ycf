import React from 'react'
import { useFormContext } from 'react-hook-form'

type TProps = {
  label: string
  name: string
}

const Checkbox: React.FC<TProps> = ({ label, name }) => {
  const { register } = useFormContext()

  return (
    <div className='block my-2 s14-mb-8'>
      <label className='flex items-center cursor-pointer'>
        <input
          {...register(name)}
          type='checkbox'
          name={name}
          className='
            rounded
            border-black-300
            focus:border-transparent focus:bg-gray-200
            text-black
            focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
          ' />
        <span className='ml-2 text-sm lg:text-lg'>{label}</span>
      </label>
    </div>
  )
}

export default Checkbox
