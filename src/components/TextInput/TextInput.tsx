import classNames from 'classnames'
import React from 'react'
import useFormError from '../../hooks/useFormError'
import ErorrLabel from '../ErrorLabel'
import GeneralTextInput, { type TTextInputProps } from '../GeneralTextInput'
import InputLabel from '../InputLabel'

const TextInput: React.FC<TTextInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  isRequired = false,
  autocomplete,
  registerOptions = {},
  additionalStyles = [],
}) => {
  const { error, hasError } = useFormError(name)

  return (
    <label className={classNames(
      'flex', 'flex-col', 'flex-grow',
      's14-mb-8',
      ...additionalStyles,
    )}>
      <InputLabel label={label}>
        <span className='hidden lg:inline'>
          {hasError && <ErorrLabel message={error?.message} />}
        </span>
      </InputLabel>

      <GeneralTextInput
        name={name}
        type={type}
        placeholder={placeholder}
        autocomplete={autocomplete}
        isRequired={isRequired}
        isError={hasError}
        registerOptions={registerOptions}
      />

      <span className='block self-end lg:hidden'>
        {hasError && <ErorrLabel message={error?.message} />}
      </span>
    </label>
  )
}

export default TextInput