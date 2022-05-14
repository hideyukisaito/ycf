import React from "react"
import { useFormContext } from "react-hook-form"

type Props = {
  label: string
  name: string
  rows: number
  required?: boolean
}

const TextArea: React.FC<Props> = ({
  label,
  name,
  rows,
  required = false,
}) => {
  const { register, formState: { errors } } = useFormContext()
  let errorMessage: string | undefined

  if (Object.keys(errors).includes(name)) {
    switch (errors[name].type) {
      case 'required':
        console.log(errors[name].type === 'required')
        errorMessage = '※必須'
        break
      default:
        break
    }
  }

  const isError = errorMessage !== undefined
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
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      {isError &&
        <span className="inline-block ml-2 mb-2 font-bold text-xs text-error">{errorMessage}</span>
      }
      <textarea
        {...register(name, { required })}
        name={name}
        className={classNames.join(' ')}
        rows={rows}
      />
    </label>
  )
}

export default TextArea
