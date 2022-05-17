import classNames from 'classnames'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useLocation, useNavigate, useNavigationType, Outlet } from 'react-router-dom'
import InputErrorAlert from '../../components/InputErrorAlert'
import ContactForm from '../../containers/ContactForm'
import { useHistoryStack } from '../../hooks/useHistoryStack'

const Contact: React.FC = () => {
  const methods = useForm()
  const hasError = Object.keys(methods.formState.errors).length > 0

  const history = useHistoryStack()
  const location = useLocation()
  const navigate = useNavigate()
  const navigationType = useNavigationType()

  // /contact/complete から戻った場合はフォームをリセットする
  useEffect(() => {
    if (location.pathname !== '/contact' || navigationType !== 'POP') return

    if (history[history.length - 1] === '/contact/complete') {
      methods.reset()
    }
  }, [history.length, location.pathname, navigationType])

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

  const handleComplete = (data: any) => console.log('完了', data)
  const handleError = (data: any) => console.log('エラー', data)

  const mainClassNames = [
    'flex', 'flex-col', 'items-center', 'self-center',
    'lg:w-[560px]',
    'relative',
  ]
  
  return (
    <FormProvider {...methods}>
      <div className='flex md:hidden sticky top-0 z-50'>
        <InputErrorAlert isVisible={hasError} />
      </div>

      <main className={classNames(mainClassNames)}>
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
