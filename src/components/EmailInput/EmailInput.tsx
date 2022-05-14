import React from "react"
import GeneralTextInput from "../GeneralTextInput"

type Props = {
  label: string
  isEnableAutoComplete?: boolean
}

const EmailInput: React.FC<Props> = ({ label, isEnableAutoComplete = false }) => {
  return (
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      <GeneralTextInput type="email" name="email" autocomplete={isEnableAutoComplete ? 'email' : ''} />
    </label>
  )
}

export default EmailInput
