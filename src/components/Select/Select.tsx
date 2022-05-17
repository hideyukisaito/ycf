import React from "react"
import { useFormContext } from "react-hook-form"
import InputLabel from "../InputLabel"

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
      <InputLabel label={label} />
      <select
        {...register(name)}
        name={name}
        className="
          block
          w-full
          mt-1
          text-sm lg:text-lg
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
