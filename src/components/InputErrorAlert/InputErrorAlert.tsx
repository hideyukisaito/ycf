import React from "react"
import classNames from "classnames"
import { useFormContext } from "react-hook-form"
import { inputLabelsAndNames } from "../../constants/inputLabelsAndNames"

type TProps = {
  isVisible?: boolean
}

const InputErrorAlert: React.FC<TProps> = ({ isVisible = false }) => {
  const { formState: { errors } } = useFormContext()
  const hasError = Object.keys(errors).length > 0

  const errorMessages = Object.keys(inputLabelsAndNames)
    .reduce((result: string[], key: string) => {
        const name = inputLabelsAndNames[key].name

        if (errors.hasOwnProperty(inputLabelsAndNames[key].name)) {
          let message = ''

          if (errors[name].type === 'required') {
            message = `${inputLabelsAndNames[key].label}は必須項目です。`
          } else if (errors[name].type === 'pattern') {
            message = `${inputLabelsAndNames[key].label}の入力形式に誤りがあります。`
          } else if (errors[name].type === 'validate') {
            if (name === 'email-repeat') {
              message = 'メールアドレスが一致していません。'
            } else if (name === 'tel') {
              message = '電話連絡をご希望の場合は電話番号を入力してください。'
            }
          }

          result.push(message)
        }
        
        return result
    }, [])

  return (
    <div className={classNames(
      'flex', 'flex-col', 'justify-center', 'items-center', 'gap-4',
      'w-full', 'h-auto',
      'py-6',
      'text-sm', 'text-white',
      'bg-error',
      hasError ? 'block' : 'hidden',
    )}>
      <p className='font-bold lg:text-base'>以下の入力内容をご確認ください。</p>
      <ul className="flex flex-col text-xs lg:text-sm text-left gap-1">
        {
          Object.entries(errorMessages).reduce((result: JSX.Element[], item) => {
            const [_, message] = item
            result.push(<li>・{message}</li>)
            return result
          }, [])
        }
      </ul>
    </div>
  )
}

export default InputErrorAlert
