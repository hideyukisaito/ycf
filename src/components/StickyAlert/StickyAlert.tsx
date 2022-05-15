import React from "react"
import { useFormContext } from "react-hook-form"

type Props = {
  isVisible?: boolean
}

const StickyAlert: React.FC<Props> = ({ isVisible = false }) => {
  const { formState: { errors } } = useFormContext()
  const hasError = Object.keys(errors).length > 0

  const classNames = [
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'w-full',
    'h-16',
    'sticky',
    'top-0',
    '-margin-10',
    'z-100',
    'text-sm',
    'font-bold',
    'text-white',
    'bg-error',
  ]

  classNames.push(hasError ? 'block' : 'hidden')

  return (
    <div className={classNames.join(' ')}>
      <p>入力項目に誤りがあります。</p>
      <p>赤枠の入力欄をご確認ください。</p>
    </div>
  )
}

export default StickyAlert
