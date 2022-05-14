import React from "react"
import { useFormContext } from "react-hook-form"

type Props = {
  name: string
  type?: string
  autocomplete?: string
  placeholder?: string
  isRequired?: boolean
  isError?: boolean
}

const GeneralTextInput: React.FC<Props> = ({
  name,
  type = 'text',
  autocomplete = '',
  placeholder = '',
  isRequired = false,
  isError = false,
}) => {
  const { register } = useFormContext()

  const classNames = [
    'mt-1',
    'block',
    'w-full',
    'rounded-md',
    'border-black-300',
    'shadow-sm',
    'focus:border-indigo-300',
    'focus:ring',
    'focus:ring-indigo-200',
    'focus:ring-opacity-50',
  ]

  if (isError) {
    classNames.push('border-solid', 'border-error', 'border-2')
  }

  return (
    <input
      {...register(name, { required: isRequired })}
      type={type}
      name={name}
      autoComplete={autocomplete}
      className={classNames.join(' ')}
      placeholder={placeholder}
    />
  )
}

export default GeneralTextInput
