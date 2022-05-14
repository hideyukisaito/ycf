import React from "react"

type Props = {
  type?: string
  name?: string
  autocomplete?: string
  placeholder?: string
}

const GeneralTextInput: React.FC<Props> = ({
  type = 'text',
  name = '',
  autocomplete = '',
  placeholder = ''
}) => {
  return (
    <input
      type={type}
      name={name}
      autoComplete={autocomplete}
      className="
        mt-1
        block
        w-full
        rounded-md
        border-black-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
      " placeholder={placeholder}
    />
  )
}

export default GeneralTextInput
