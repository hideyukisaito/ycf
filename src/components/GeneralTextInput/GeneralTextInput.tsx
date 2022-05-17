import React from 'react'
import { RegisterOptions, useFormContext } from 'react-hook-form'

export type TTextInputProps = {
  label: string
  name: string
  type?: string
  autocomplete?: string
  placeholder?: string
  isEnableAutoComplete?: boolean
  isRequired?: boolean
  registerOptions?: Partial<RegisterOptions>
}

type TProps = Partial<TTextInputProps> & {
  isError?: boolean
}

const GeneralTextInput: React.FC<TProps> = ({
  name,
  type = 'text',
  autocomplete = '',
  placeholder = '',
  isRequired = false,
  isError = false,
  registerOptions = {},
}) => {
  const { register } = useFormContext()

  const classNames = [
    'mt-1',
    'block',
    'w-full',
    'rounded-md',
    'box-border',
    'border-black-300',
    'shadow-sm',
    'text-sm', 'lg:text-lg',
    'focus:border-indigo-300',
    'focus:ring',
    'focus:ring-indigo-200',
    'focus:ring-opacity-50',
  ]

  if (isError) {
    classNames.push('border-solid', 'border-error', 'border-[3px]')
  }

  Object.assign(registerOptions, {
    required: {
      value: isRequired,
      message: isRequired ? '必須項目です。' : '',
    }
  })

  return (
    <input
      {
        ...register(name!, registerOptions)
      }
      type={type}
      name={name}
      autoComplete={autocomplete}
      className={classNames.join(' ')}
      placeholder={placeholder}
    />
  )
}

export default GeneralTextInput
