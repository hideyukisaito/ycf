import React from "react"
import useFormError from "../../hooks/useFormError"
import ErorrLabel from "../ErrorLabel"
import GeneralTextInput from "../GeneralTextInput"

type Props = {
  label: string
  name: string
  isEnableAutoComplete?: boolean
}

const TelephoneInput: React.FC<Props> = ({ label, name, isEnableAutoComplete = false }) => {
  const { error, hasError } = useFormError(name)
  
  return (
    <label className="block animate-appear">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      {hasError && <ErorrLabel message={error?.message} />}
      <GeneralTextInput
        type="tel"
        name="tel"
        placeholder="例) 0312345678"
        pattern={/^0[-0-9]{9,12}$/}
        patternErrorMessage="入力形式に誤りがあります。"
        autocomplete={isEnableAutoComplete ? 'tel' : ''}
        isError={hasError}
      />
    </label>
  )
}

export default TelephoneInput
