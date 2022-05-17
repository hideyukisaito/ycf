import React from 'react'
import useFormError from '../../hooks/useFormError'
import ErorrLabel from '../ErrorLabel'
import GeneralTextInput, { type TTextInputProps } from '../GeneralTextInput'
import InputLabel from '../InputLabel'

const PostalCodeInput: React.FC<TTextInputProps> = ({
  label,
  name,
  isEnableAutoComplete = false,
  isRequired = false,
  registerOptions = {},
}) => {
  const { error, hasError } = useFormError(name)
  
  return (
    <label className='block w-1/2 md:w-full'>
      <InputLabel label={label}>
        <span className='hidden lg:inline'>
          {hasError && <ErorrLabel message={error?.message} />}
        </span>
      </InputLabel>
      
      <GeneralTextInput
        type='text'
        name={name}
        placeholder='例) 1500000'
        autocomplete={isEnableAutoComplete ? name : ''}
        isRequired={isRequired}
        isError={hasError}
        registerOptions={Object.assign(registerOptions, {
          pattern: {
            value: /^[0-9]{3}-?[0-9]{4}$/,
            message: '7ケタの数字を入力してください。',
          }
        })}
      />

      <span className='block self-end lg:hidden'>
        {hasError && <ErorrLabel message={error?.message} />}
      </span>
    </label>
  )
}

export default PostalCodeInput
