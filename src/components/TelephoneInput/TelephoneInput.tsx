import React from 'react'
import useFormError from '../../hooks/useFormError'
import ErorrLabel from '../ErrorLabel'
import GeneralTextInput, { type TTextInputProps } from '../GeneralTextInput'
import InputLabel from '../InputLabel'

const TelephoneInput: React.FC<TTextInputProps> = ({
  label,
  name,
  isEnableAutoComplete = false,
  isRequired = false,
  registerOptions = {},
}) => {
  const { error, hasError } = useFormError(name)
  
  return (
    <label className='flex flex-col animate-appear w-full'>
      <InputLabel label={label}>
        <span className='hidden lg:inline'>
          {hasError && <ErorrLabel message={error?.message} />}
        </span>
      </InputLabel>

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

      <span className='block self-end lg:hidden'>
        {hasError && <ErorrLabel message={error?.message} />}
      </span>
    </label>
  )
}

export default TelephoneInput
