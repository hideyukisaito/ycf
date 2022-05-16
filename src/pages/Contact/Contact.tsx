import classNames from 'classnames'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import InputErrorAlert from '../../components/InputErrorAlert'
import ContactForm from '../../containers/ContactForm'
import ContactFormConfirmation from '../../containers/ContactFormConfirmation'

const Contact: React.FC = () => {
  const methods = useForm()
  const hasError = Object.keys(methods.formState.errors).length > 0
  
  const [isShowConfirmation, setIsShowConfirmation] = useState(false)
  const [formData, setFormData] = useState<{ [x: string]: any }>({})
  
  const handleSubmit = (data: any) => {
    setFormData(data)
    setIsShowConfirmation(true)

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

    console.log('サブミット', formData, setIsShowConfirmation)
  }

  const handleConfirmed = (data: any) => {
    console.log('確認した', data)
  }

  const handleComplete = (data: any) => console.log('完了', data)
  const handleError = (data: any) => console.log('エラー', data)
  
  return (
    <FormProvider {...methods}>
      <div className='flex md:hidden sticky top-0 z-50'>
        <InputErrorAlert isVisible={hasError} />
      </div>

      <main className='
        flex flex-col items-center self-center gap-8
        lg:w-[560px]
        relative
        px-8 py-4 lg:px-0
      '>
        <header className='flex flex-col justify-center items-center'>
          <h1 className='text-md lg:text-xl font-bold my-1'>お問い合わせフォーム</h1>
          <p className='my-2 text-xs lg:text-[14px]'>
            <a href='#' className='text-blue-500 underline'>
              <span>よくあるお問い合わせ</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            もご覧ください。
          </p>
        </header>

        <div className={classNames(
          'hidden',
          'md:flex',
          'w-full',
        )}>
          <InputErrorAlert isVisible={hasError} />
        </div>

        {!isShowConfirmation &&
          <ContactForm
            onSubmit={methods.handleSubmit(handleSubmit)}
            onComplete={handleComplete}
            onError={handleError}
          />
        }

        {isShowConfirmation &&
          <ContactFormConfirmation
            formData={formData}
            isVisible={isShowConfirmation}
            onConfirmed={handleConfirmed}
          />
        }
      </main>
    </FormProvider>
  )
}

export default Contact
