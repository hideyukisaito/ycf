import React from "react"

type Props = {
  message: string | undefined
}

const ErorrLabel: React.FC<Props> = ({ message }) => {
  if (message?.length === 0) return null

  return (
    <span className="inline-block ml-2 mb-2 font-bold text-xs text-error">※{message}</span>
  )
}

export default ErorrLabel
