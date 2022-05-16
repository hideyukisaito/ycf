import React from 'react'
import useFormError from '../../hooks/useFormError'
import ErorrLabel from '../ErrorLabel'
import GeneralTextInput, { type TTextInputProps } from '../GeneralTextInput'

const PostalCodeInput: React.FC<TTextInputProps> = ({
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
        type='text'
        name={name}
        placeholder='例) 100-0000'
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
    </label>
  )
}

export default PostalCodeInput