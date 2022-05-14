import React from "react"

type Props = {
  isVisible?: boolean
}

const StickyAlert: React.FC<Props> = ({ isVisible = false }) => {
  const classNames = [
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'w-full',
    'sticky',
    'top-0',
    'z-100',
    'h-16',
    'text-sm',
    'font-bold',
    'text-white',
    'bg-error',
  ]

  classNames.push(isVisible ? 'block' : 'hidden')

  return (
    <div className={classNames.join(' ')}>
      <p>入力項目に誤りがあります。</p>
      <p>赤枠の入力欄をご確認ください。</p>
    </div>
  )
}

export default StickyAlert
