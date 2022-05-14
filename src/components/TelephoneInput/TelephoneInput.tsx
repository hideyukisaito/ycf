import React from "react"
import GeneralTextInput from "../GeneralTextInput"

type Props = {
  label: string
  name?: string
  isEnableAutoComplete?: boolean
}

const TelephoneInput: React.FC<Props> = ({ label, name, isEnableAutoComplete = false }) => {
  return (
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      <GeneralTextInput type="tel" name="tel" autocomplete={isEnableAutoComplete ? 'tel' : ''} />
    </label>
  )
}

export default TelephoneInput
