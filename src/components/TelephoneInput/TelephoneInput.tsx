import React from 'react'
import useFormError from '../../hooks/useFormError'
import ErorrLabel from '../ErrorLabel'
import GeneralTextInput, { type TTextInputProps } from '../GeneralTextInput'

const TelephoneInput: React.FC<TTextInputProps> = ({
  label,
  name,
  isEnableAutoComplete = false,
  isRequired = false,
  registerOptions = {},
}) => {
  const { error, hasError } = useFormError(name)
  
  return (
    <label className='block animate-appear w-1/2 md:w-1/3'>
      <span className='input-label'>{label}</span>
      {hasError && <ErorrLabel message={error?.message} />}
      <GeneralTextInput
        type='tel'
        name='tel'
        placeholder='例) 0312345678'
        autocomplete={isEnableAutoComplete ? 'tel' : ''}
        isError={hasError}
        registerOptions={Object.assign(registerOptions, {
          pattern: {
            value: /^0[-0-9]{9,12}$/,
            message: '入力形式に誤りがあります。',
          }
        })}
      />
    </label>
  )
}

export default TelephoneInput
