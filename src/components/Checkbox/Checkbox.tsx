import React from "react"

type Props = {
  label: string
  name?: string
}

const Checkbox: React.FC<Props> = ({ label, name }) => {
  return (
    <div className="block">
      <div className="mt-2">
        <div>
          <label className="inline-flex items-center">
            <input
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
