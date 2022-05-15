import React from "react"
import { useFormContext } from "react-hook-form"

type Props = {
  isVisible?: boolean
}

const StickyAlert: React.FC<Props> = ({ isVisible = false }) => {
  const { formState: { errors } } = useFormContext()
  const hasError = Object.keys(errors).length > 0

  const errorTypes = Object.keys(errors).reduce((result: string[], key) => {
    if (!result.includes(errors[key].type)) {
      result.push(errors[key].type)
    }
    return result
  }, [])
  console.log('error types', errorTypes)

  const classNames = [
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'gap-4',
    'w-full',
    'h-24',
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
      <p>赤枠の入力内容に誤りがあります。</p>
      {errorTypes.length > 0 &&
        <ul className="flex flex-col text-xs text-left">
          {errorTypes.includes('required') && <li>・必須項目が入力されていません。</li>}
          {errorTypes.includes('pattern') && <li>・入力形式に誤りがあります。</li>}
        </ul>
      }
    </div>
  )
}

export default StickyAlert
