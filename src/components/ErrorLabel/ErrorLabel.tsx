import React from "react"

type TProps = {
  message: string | undefined
}

const ErorrLabel: React.FC<TProps> = ({ message }) => {
  if (message?.length === 0) return null

  return (
    <span className="inline-block ml-2 mb-2 font-bold text-xs text-error">※{message}</span>
  )
}

export default ErorrLabel
