import React from "react"
import OptionalLabel from "../OptionalLabel"
import RequiredLabel from "../RequiredLabel"

type TProps = {
  label: string
  isRequired: boolean
}

const FormSectionHeader: React.FC<TProps> = ({ label, isRequired }) => {
  return (
    <header className="flex flex-row items-center gap-2 s14-mb-8">
      {
        isRequired ? <RequiredLabel /> : <OptionalLabel />
      }
      <legend className="font-bold s14-ml-2"><h2>{label}</h2></legend>
    </header>
  )
}

export default FormSectionHeader