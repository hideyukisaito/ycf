import React from "react"
import { useFormContext } from "react-hook-form"
import useFormError from "../../hooks/useFormError"
import ErorrLabel from "../ErrorLabel"

type Props = {
  label: string
  name: string
  rows: number
  isRequired?: boolean
}

const TextArea: React.FC<Props> = ({
  label,
  name,
  rows,
  isRequired = false,
}) => {
  const { register } = useFormContext()
  const { error, hasError } = useFormError(name)

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

  if (hasError) {
    classNames.push('border-solid', 'border-error', 'border-[3px]')
  }

  return (
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      {hasError && <ErorrLabel message={error?.message} />}
      <textarea
        {...register(name, { required: { value: isRequired, message: isRequired ? '必須' : '' } })}
        name={name}
        className={classNames.join(' ')}
        rows={rows}
      />
    </label>
  )
}

export default TextArea
