import React from "react"
import { useFormContext } from "react-hook-form"
import GeneralTextInput from "../GeneralTextInput"

type Props = {
  label: string
  isEnableAutoComplete?: boolean
  required?: boolean
}

const EmailInput: React.FC<Props> = ({ label, isEnableAutoComplete = false, required = false }) => {
  const { register, formState: { errors } } = useFormContext()
  const name = 'email'
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
  
  return (
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      {isError &&
        <span className="inline-block ml-2 mb-2 font-bold text-xs text-error">{errorMessage}</span>
      }
      <GeneralTextInput
        type="email"
        name={name}
        autocomplete={isEnableAutoComplete ? name : ''}
        isRequired={required}
        isError={isError}
      />
    </label>
  )
}

export default EmailInput
