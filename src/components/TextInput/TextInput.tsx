import React from "react"
import { useFormContext } from "react-hook-form"
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
  const { formState: { errors } } = useFormContext()
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

  console.log(`error for ${name}`, errorMessage)

  const isError = errorMessage !== undefined

  return (
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      {isError &&
        <span className="inline-block ml-2 mb-2 font-bold text-xs text-error">{errorMessage}</span>
      }
      <GeneralTextInput
        name={name}
        autocomplete={autocomplete}
        isRequired={required}
        isError={isError}
      />
    </label>
  )
}

export default TextInput