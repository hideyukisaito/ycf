import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useLocation, useNavigate, useNavigationType, Outlet } from 'react-router-dom'
import InputErrorAlert from '../../components/InputErrorAlert'
import ContactForm from '../../containers/ContactForm'
import ContactFormConfirmation from '../../containers/ContactFormConfirmation'

const isConfirmation = (pathname: string) => pathname === '/contact/confirm'

const Contact: React.FC = () => {
  const methods = useForm()
  const hasError = Object.keys(methods.formState.errors).length > 0

  const location = useLocation()
  const navigate = useNavigate()
  const navigationType = useNavigationType()
  console.log('navigationType', navigationType)

  useEffect(() => {
    alert(`${location.pathname}, ${navigationType}`)
  }, [location.pathname, navigationType])

  // 「入力内容を確認する」
  const handleSubmit = (data: any) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

    navigate('./confirm', {
      state: {
        formData: data,
      }
    })
  }

  // 「送信する」
  const handleConfirmed = (data: any) => {
    console.log('確認した', data)

    navigate('./complete', { replace: true })
  }

  const handleComplete = (data: any) => console.log('完了', data)
  const handleError = (data: any) => console.log('エラー', data)

  return (
    <FormProvider {...methods}>
      <div className='flex md:hidden sticky top-0 z-50'>
        <InputErrorAlert isVisible={hasError} />
      </div>

      <main className='
        flex flex-col items-center self-center
        lg:w-[560px]
        relative
      '>
        <div className={classNames(
          'hidden',
          'md:flex',
          'w-full',
        )}>
          <InputErrorAlert isVisible={hasError} />
        </div>
        
        {location.pathname !== '/contact'
          ? <Outlet />
          : <ContactForm
              onSubmit={handleSubmit}
              onComplete={handleComplete}
              onError={handleError}
            />
        }
      </main>
    </FormProvider>
  )
}

export default Contact
