import React from "react"

type Props = {
  label: string
  rows: number
  name?: string
}

const TextArea: React.FC<Props> = ({ label, rows, name }) => {
  return(
    <label className="block">
      <span className="inline-block mb-2 text-gray-700">{label}</span>
        <textarea
          name={name}
          className="
            mt-1
            block
            w-full
            rounded-md
            border-black-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          " rows={rows}
        />
    </label>
  )
}

export default TextArea
