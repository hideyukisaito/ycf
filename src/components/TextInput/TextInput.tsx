import React from 'react'
import useFormError from '../../hooks/useFormError'
import ErorrLabel from '../ErrorLabel'
import GeneralTextInput, { type TTextInputProps } from '../GeneralTextInput'

const TextInput: React.FC<TTextInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  isRequired = false,
  autocomplete,
  registerOptions = {},
}) => {
  const { error, hasError } = useFormError(name)

  return (
    <label className='block flex-grow'>
      <span className='input-label'>{label}</span>
      {hasError && <ErorrLabel message={error?.message} />}
      <GeneralTextInput
        name={name}
        type={type}
        placeholder={placeholder}
        autocomplete={autocomplete}
        isRequired={isRequired}
        isError={hasError}
        registerOptions={registerOptions}
      />
    </label>
  )
}

export default TextInput