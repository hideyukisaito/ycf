import React from "react"
import OptionalLabel from "../OptionalLabel"
import RequiredLabel from "../RequiredLabel"

type Props = {
  label: string
  isRequired: boolean
}

const FormSectionHeader: React.FC<Props> = ({ label, isRequired }: Props) => {
  return (
    <header className="flex flex-row items-center gap-2">
      {
        isRequired ? <RequiredLabel /> : <OptionalLabel />
      }
      <h2 className="font-bold">{label}</h2>
    </header>
  )
}

export default FormSectionHeader