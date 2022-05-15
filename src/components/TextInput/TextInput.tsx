import React from "react"
import useFormError from "../../hooks/useFormError"
import ErorrLabel from "../ErrorLabel"
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

  return (
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      {hasError && <ErorrLabel message={error?.message} />}
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