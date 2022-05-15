import React from "react"
import useFormError from "../../hooks/useFormError"
import ErorrLabel from "../ErrorLabel"
import GeneralTextInput from "../GeneralTextInput"

type Props = {
  label: string
  name: string
  pattern?: RegExp
  patternErrorMessage?: string
  placeholder?: string
  required?: boolean
  autocomplete?: string
}

const TextInput: React.FC<Props> = ({
  label,
  name,
  pattern = null,
  patternErrorMessage = '',
  placeholder = '',
  required = false,
  autocomplete,
}) => {
  const { error, hasError } = useFormError(name)

  return (
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      {hasError && <ErorrLabel message={error?.message} />}
      <GeneralTextInput
        name={name}
        pattern={pattern}
        patternErrorMessage={patternErrorMessage}
        placeholder={placeholder}
        autocomplete={autocomplete}
        isRequired={required}
        isError={hasError}
      />
    </label>
  )
}

export default TextInput