import React from "react"
import GeneralTextInput from "../GeneralTextInput"

type Props = {
  label: string
  name?: string
  autocomplete?: string
}

const TextInput: React.FC<Props> = ({ label, name, autocomplete }) => {
  return (
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      <GeneralTextInput name={name} autocomplete={autocomplete} />
    </label>
  )
}

export default TextInput