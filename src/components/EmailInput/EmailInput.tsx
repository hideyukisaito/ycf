import React from "react"
import useFormError from "../../hooks/useFormError"
import ErorrLabel from "../ErrorLabel"
import GeneralTextInput from "../GeneralTextInput"

type Props = {
  label: string
  isEnableAutoComplete?: boolean
  isRequired?: boolean
}

const EmailInput: React.FC<Props> = ({ label, isEnableAutoComplete = false, isRequired = false }) => {
  const name = 'email'
  const { error, hasError } = useFormError(name)
  
  return (
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      {hasError && <ErorrLabel message={error?.message} />}
      <GeneralTextInput
        type="email"
        name={name}
        placeholder='例) user@example.com'
        pattern={/[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/}
        patternErrorMessage='入力形式に誤りがあります。'
        autocomplete={isEnableAutoComplete ? name : ''}
        isRequired={isRequired}
        isError={hasError}
      />
    </label>
  )
}

export default EmailInput
