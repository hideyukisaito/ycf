import React from "react"

const RequiredLabel: React.FC = () => {
  return (
    <div className="px-2 py-1 rounded-md bg-required border-2 border-required">
      <span className="text-sm font-bold text-white">必須</span>
    </div>
  )
}

export default RequiredLabel