import React from "react"
import { useFormContext } from "react-hook-form"

type Props = {
  isVisible?: boolean
}

const InputErrorAlert: React.FC<Props> = ({ isVisible = false }) => {
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
    'lg:h-32',
    'text-sm',
    'text-white',
    'bg-error',
  ]

  classNames.push(hasError ? 'block' : 'hidden')

  return (
    <div className={classNames.join(' ')}>
      <p className='font-bold'>入力内容に誤りがあります。</p>
      {errorTypes.length > 0 &&
        <ul className="flex flex-col text-xs text-left gap-1">
          {errorTypes.includes('required') && <li>・必須項目が入力されていません。</li>}
          {errorTypes.includes('pattern') && <li>・入力形式に誤りがあります。</li>}
        </ul>
      }
    </div>
  )
}

export default InputErrorAlert
