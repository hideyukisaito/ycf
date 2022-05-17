import React from "react"
import { useFormContext } from "react-hook-form"

type TProps = {
  label: string
  name: string
  options: string[]
}

const Select: React.FC<TProps> = ({ label, name, options }) => {
  const optionElements = options.map((option) => <option key={option}>{option}</option>)

  const { register } = useFormContext()

  return (
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
      <select
        {...register(name)}
        name={name}
        className="
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
