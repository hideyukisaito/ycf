import React from "react"
import useFormError from "../../hooks/useFormError"
import ErorrLabel from "../ErrorLabel"
import GeneralTextInput from "../GeneralTextInput"

type Props = {
  label: string
  isEnableAutoComplete?: boolean
  required?: boolean
}

const EmailInput: React.FC<Props> = ({ label, isEnableAutoComplete = false, required = false }) => {
  const name = 'email'
  const { error, hasError } = useFormError(name)
  
  return (
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      {hasError && <ErorrLabel message={error?.message} />}
      <GeneralTextInput
        type="email"
        name={name}
        autocomplete={isEnableAutoComplete ? name : ''}
        isRequired={required}
        isError={hasError}
      />
    </label>
  )
}

export default EmailInput
