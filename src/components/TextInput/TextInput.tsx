import React from "react"
import useFormError from "../../hooks/useFormError"
import GeneralTextInput from "../GeneralTextInput"

type Props = {
  label: string
  name: string
  required?: boolean
  autocomplete?: string
}

const TextInput: React.FC<Props> = ({
  label,
  name,
  required = false,
  autocomplete,
}) => {
  const { error, hasError } = useFormError(name)

  let errorMessage: string | undefined

  if (hasError && error) {
    switch (error.type) {
      case 'required':
        errorMessage = '※必須'
        break
      default:
        break
    }
  }

  return (
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      {hasError &&
        <span className="inline-block ml-2 mb-2 font-bold text-xs text-error">{errorMessage}</span>
      }
      <GeneralTextInput
        name={name}
        autocomplete={autocomplete}
        isRequired={required}
        isError={hasError}
      />
    </label>
  )
}

export default TextInput