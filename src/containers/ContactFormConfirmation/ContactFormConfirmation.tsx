import React, { useEffect, useLayoutEffect, useState } from 'react'
import classNames from 'classnames'
import { useNavigate, useNavigationType, useLocation } from 'react-router-dom'
import { inputLabelsAndNames } from '../../constants/inputLabelsAndNames'
import { useHistoryStack } from '../../hooks/useHistoryStack'
import { Spinner } from '../../components/Spinner/Spinner'
import { Button } from '../../components/Button/Button'

// ------------------------------------------------------------------------
type TSectionProps = {
  title: string
  children?: React.ReactNode
}

const FormDataSection: React.FC<TSectionProps> = ({ title, children }) => {
  return (
    <section className='
      flex flex-col gap-2
      px-4 md:px-8 pt-4 pb-6
      my-6
      border-solid border-black border-[2px] rounded-md
    '>
      <header className='w-max -mt-7 self-center bg-white px-2'>
        <h3 className='text-sm lg:text-base font-bold'>{title}</h3>
      </header>
      {children}
    </section>
  )
}

// ------------------------------------------------------------------------
type TFormDataProps = {
  label: string
  content: string
}

const FormData: React.FC<TFormDataProps> = ({ label, content }) => {
  return (
    <div 
      className={classNames(
        'group',
        'flex', 'flex-row', 'justify-between', 'items-center',
        'px-2', 'md:px-4', 'py-2',
        'text-sm', 'lg:text-base',
      )}
    >
      <div>
        <h4 className='text-md leading-loose'>{label}：</h4>
        <p className='leading-relaxed'>{content || '-'}</p>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------
type TNoteProps = {
  children: React.ReactNode | string
}

const Note: React.FC<TNoteProps> = ({ children }) => {
  return (
    <div className='flex flex-row items-center mb-2'>
      <div className='flex items-center w-8 h-8'>
        <svg xmlns="http://www.w3.org/2000/svg" width='20' height='20' className="h-100 w-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p className='leading-relaxed font-bold pl-2 md:p-0'>{children}</p>
    </div>
  )
}

// ------------------------------------------------------------------------
export const ContactFormConfirmation: React.FC = () => {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [wrapperClassName, setWrapperClassName] = useState('')
  const [isSending, setIsSending] = useState(false)

  const navigate = useNavigate()
  const navigationType = useNavigationType()
  const location = useLocation()
  const history = useHistoryStack()
  // @ts-ignore
  const { formData } = location.state

  const handleBackToEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate('/contact', { replace: false })
  }

  // 「個人情報の取り扱い」のチェックボックスを押した際のハンドラ
  const handleChangeConfirmationCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsConfirmed(e.target.checked)
  }

  // 「送信する」ボタンを押した際のハンドラ
  const handleConfirmed = async () => {
    if (!isConfirmed) return

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

    setIsSending(true)

    const request = new Request('/inquiry', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(formData),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('送信完了', data)

    navigate('/contact/complete', { replace: true })
  }

  // 入力画面からブラウザの「進む」機能で訪問した場合は入力画面に戻す
  useEffect(() => {
    if (navigationType === 'POP' && history.length === 0) {
      navigate('/contact', { replace: true })
    }
  }, [navigationType, history])

  // fade エフェクト用
  useLayoutEffect(() => {
    setWrapperClassName(location.pathname === '/contact/confirm' ? 'show' : 'hide')
  }, [location.pathname])

  return (
    <div className={classNames(
      'relative',
      'w-5/6', 'lg:w-full', 'max-w-screen-sm',
      'z-50',
      'text-sm', 'lg:text-md',
      'visible opacity-100 duration-500 delay-500',
      wrapperClassName,
    )}>
      {isSending && <Spinner />}

      <div className={classNames(
        'flex', 'flex-col', 'gap-0', 'md:gap-2',
        isSending ? 'deactivate' : 'activate'
      )}>
        <header className={classNames(
          'flex', 'flex-col', 'justify-center', 'items-center',
          'mt-8', 'mb-0', 'lg:m-0',
        )}>
          <h1 className='text-md lg:text-xl font-bold my-1'>
            入力内容の確認
          </h1>
          <p className='my-2 text-xs lg:text-sm'>
            ご入力内容に間違いがないかご確認ください。
          </p>
        </header>

        <section className='flex flex-col self-center items-center text-xs lg:text-sm my-4'>
          <Note>土日祝日のお問い合わせは翌営業日以降にご連絡させていただきます。</Note>
          <Note>数日経っても返答がない場合は恐れ入りますが再度お問い合わせください。</Note>
        </section>

        <FormDataSection title='お問い合わせ内容'>
          <FormData
            label={inputLabelsAndNames.inquiryAbout.label}
            content={formData[inputLabelsAndNames.inquiryAbout.name]}
          />

          <FormData
            label={inputLabelsAndNames.inquiryTitle.label}
            content={formData[inputLabelsAndNames.inquiryTitle.name]}
          />

          <FormData
            label={inputLabelsAndNames.inquiryDetail.label}
            content={formData[inputLabelsAndNames.inquiryDetail.name]}
          />
        </FormDataSection>

        <FormDataSection title='お名前とメールアドレス'>
          <FormData
            label='お名前'
            content={`${formData[inputLabelsAndNames.familyName.name]} ${formData[inputLabelsAndNames.givenName.name]}`}
          />

          <FormData
            label='お名前 (ふりがな)'
            content={`${formData[inputLabelsAndNames.familyNameKana.name]} ${formData[inputLabelsAndNames.givenNameKana.name]}`}
          />

          <FormData
            label={inputLabelsAndNames.email.label}
            content={formData[inputLabelsAndNames.email.name]}
          />

          <FormData
            label={inputLabelsAndNames.emailRepeat.label}
            content={formData[inputLabelsAndNames.emailRepeat.name]}
          />
        </FormDataSection>

        <FormDataSection title='その他'>
          <FormData
            label={inputLabelsAndNames.organization.label}
            content={formData[inputLabelsAndNames.organization.name]}
          />

          <FormData
            label={inputLabelsAndNames.postalCode.label}
            content={formData[inputLabelsAndNames.postalCode.name]}
          />

          <FormData
            label={inputLabelsAndNames.isCallable.label}
            content={formData[inputLabelsAndNames.isCallable.name] ? 'はい' : 'いいえ'}
          />

          {formData[inputLabelsAndNames.isCallable.name] &&
            <FormData
              label={inputLabelsAndNames.tel.label}
              content={formData[inputLabelsAndNames.tel.name]}
            />
          }
        </FormDataSection>

        <Button
          label='入力内容を修正する'
          fill={false}
          onClick={handleBackToEdit}
        />

        <label className='
          flex items-center justify-center self-center
          w-full
          p-8
          my-8 lg:mt-8 lg:mb-4
          bg-blue-100
          rounded-md
          cursor-pointer
          '
        >
          <input
            type="checkbox"
            name='accept-terms-of-use'
            className='
              w-5
              h-5
              rounded
              focus:border-transparent focus:bg-gray-200
              focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
            '
            onChange={handleChangeConfirmationCheckbox}
          />
          <span className='ml-2 text-xs lg:text-base lg:pl-2'>
            <a href='https://www.google.com/' target='_blank' className='text-blue-700 underline'>
              <span>個人情報の取り扱いに関する同意事項</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>に同意します。
          </span>
        </label>

        <Button
          label='送信する'
          disabled={!isConfirmed}
          onClick={handleConfirmed}
        />
      </div>
    </div>
  )
}
