import React from 'react'
import useFormError from '../../hooks/useFormError'
import ErorrLabel from '../ErrorLabel'
import GeneralTextInput, { type TTextInputProps } from '../GeneralTextInput'

const EmailInput: React.FC<TTextInputProps> = ({
  label,
  name,
  isEnableAutoComplete = false,
  isRequired = false,
  registerOptions = {},
}) => {
  const { error, hasError } = useFormError(name)
  
  return (
    <label className='block'>
      <span className='input-label'>{label}</span>
      {hasError && <ErorrLabel message={error?.message} />}
      <GeneralTextInput
        type='email'
        name={name}
        placeholder='例) user@example.com'
        autocomplete={isEnableAutoComplete ? name : ''}
        isRequired={isRequired}
        isError={hasError}
        registerOptions={Object.assign(registerOptions, {
          pattern: {
            value: /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/,
            message: '入力形式に誤りがあります。',
          }
        })}
      />
    </label>
  )
}

export default EmailInput
