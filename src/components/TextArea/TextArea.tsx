import React from "react"
import { useFormContext } from "react-hook-form"
import useFormError from "../../hooks/useFormError"
import InputLabel from "../InputLabel"
import ErorrLabel from "../ErrorLabel"

type TProps = {
  label: string
  name: string
  rows: number
  isRequired?: boolean
}

const TextArea: React.FC<TProps> = ({
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
    'text-sm', 'lg:text-lg',
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
    <label className="flex flex-col">
      <InputLabel label={label}>
        <span className='hidden lg:inline'>
          {hasError && <ErorrLabel message={error?.message} />}
        </span>
      </InputLabel>

      <textarea
        {...register(name, { required: { value: isRequired, message: isRequired ? '必須項目です。' : '' } })}
        name={name}
        className={classNames.join(' ')}
        rows={rows}
      />

      <span className='block self-end lg:hidden'>
        {hasError && <ErorrLabel message={error?.message} />}
      </span>
    </label>
  )
}

export default TextArea
