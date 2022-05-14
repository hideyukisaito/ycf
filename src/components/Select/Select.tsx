import React from "react"

type Props = {
  label: string
  options: string[]
}

const Select: React.FC<Props> = ({ label, options }) => {
  const optionElements = options.map((option) => <option>{option}</option>)

  return (
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      <select className="
          block
          w-full
          mt-1
          rounded-md
          border-black-300
          shadow-sm
          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
        ">
      {optionElements}
      </select>
    </label>
  )
}

export default Select
