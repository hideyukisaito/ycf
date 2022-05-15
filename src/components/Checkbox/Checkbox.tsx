import React from "react"
import { useFormContext } from "react-hook-form"

type Props = {
  label: string
  name: string
}

const Checkbox: React.FC<Props> = ({ label, name }) => {
  const { register } = useFormContext()

  return (
    <div className="block">
      <div className="mt-2">
        <div>
          <label className="flex items-center">
            <input
              {...register(name)}
              type="checkbox"
              name={name}
              className="
                rounded
                border-black-300
                focus:border-transparent focus:bg-gray-200
                text-black
                focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
              " />
            <span className="ml-2">{label}</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Checkbox
