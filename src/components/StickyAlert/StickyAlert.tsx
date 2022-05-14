import React from "react"

const StickyAlert: React.FC = () => {
  return (
    <div
      className="
        flex flex-col justify-center items-center
        sticky top-0 z-100
        h-16
        text-sm font-bold text-white
        bg-error
        animate-appear"
    >
      <p>入力項目に誤りがあります。</p>
      <p>赤枠の入力欄をご確認ください。</p>
    </div>
  )
}

export default StickyAlert
