import classNames from 'classnames'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import Checkbox from '../../components/Checkbox'
import EmailInput from '../../components/EmailInput'
import FormSectionHeader from '../../components/FormSectionHeader'
import InputErrorAlert from '../../components/InputErrorAlert'
import PostalCodeInput from '../../components/PostalCodeInput'
import Select from '../../components/Select'
import TelephoneInput from '../../components/TelephoneInput'
import TextArea from '../../components/TextArea'
import TextInput from '../../components/TextInput'
import { inputLabelsAndNames } from '../../constants/inputLabelsAndNames'
import './ContactForm.css'

type TFormSection = {
  children: React.ReactNode
}

const FormSection: React.FC<TFormSection> = ({ children }) => {
  return (
    <fieldset className='flex flex-col gap-5 md:gap-6'>
      {children}
    </fieldset>
  )
}

type TProps = {
  onSubmit: (data: any) => void
}

export const ContactForm: React.FC<TProps> = ({ onSubmit }) => {
  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
    trigger,
  } = useFormContext()
  
  // 電話連絡希望のチェックボックスを監視
  const watchIsCallable = useWatch({ control, name: inputLabelsAndNames.isCallable.name })

  // 電話連絡不可に変更された場合は電話番号をクリアする
  useEffect(() => {
    if (!watchIsCallable) {
      reset({
        'tel': '',
      }, {
        keepDefaultValues: true,
      })
    }
  }, [watchIsCallable])

  // fade エフェクト用
  const { pathname } = useLocation()
  const [wrapperClassName, setWrapperClassName] = useState('')

  useLayoutEffect(() => {
    setWrapperClassName(pathname === '/contact' ? 'show' : 'hide')
  }, [pathname])

  return (
    <div className={wrapperClassName}>
      <header className='flex flex-col justify-center items-center my-8 lg:mt-0 lg:mb-8'>
        <h1 className='flex flex-row gap-1 items-center text-md lg:text-xl font-bold my-1'>
          お問い合わせフォーム
        </h1>
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
        'mb-8',
      )}>
        <InputErrorAlert isVisible={Object.keys(errors).length > 0} />
      </div>
      
      <form
        className={classNames(
          'flex',
          'flex-col',
          'gap-14',
          'relative',
          'w-5/6',
          'lg:w-full',
          'm-auto',
        )}
        autoComplete='on'
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormSection>
          <FormSectionHeader label='1.お問い合わせ内容' isRequired={true} />

          <Select
            label={inputLabelsAndNames.inquiryAbout.label}
            name={inputLabelsAndNames.inquiryAbout.name}
            options={[
              'なし',
              'サービスA',
              'サービスB',
              'サービスC',
              'その他',
            ]}
          />

          <TextInput
            label={inputLabelsAndNames.inquiryTitle.label}
            name={inputLabelsAndNames.inquiryTitle.name}
            isRequired={true}
          />

          <TextArea
            label={inputLabelsAndNames.inquiryDetail.label}
            name={inputLabelsAndNames.inquiryDetail.name}
            rows={6}
            isRequired={true}
          />
        </FormSection>

        <FormSection>
          <FormSectionHeader label='2.お名前とメールアドレス' isRequired={true} />

          <div className='flex flex-row justify-between gap-4 lg:gap-8'>
            <TextInput
              label={inputLabelsAndNames.familyName.label}
              name={inputLabelsAndNames.familyName.name}
              autocomplete='family-name'
              isRequired={true}
            />

            <TextInput
              label={inputLabelsAndNames.givenName.label}
              name={inputLabelsAndNames.givenName.name}
              autocomplete='given-name'
              isRequired={true}
            />
          </div>

          <div className='flex flex-row justify-between gap-4 lg:gap-8'>
            <TextInput
              label={inputLabelsAndNames.familyNameKana.label}
              name={inputLabelsAndNames.familyNameKana.name}
              isRequired={true}
            />

            <TextInput
              label={inputLabelsAndNames.givenNameKana.label}
              name={inputLabelsAndNames.givenNameKana.name}
              isRequired={true}
            />
          </div>

          <EmailInput
            label={inputLabelsAndNames.email.label}
            name={inputLabelsAndNames.email.name}
            isRequired={true}
            registerOptions={{
              onBlur: () => {
                if (getValues(inputLabelsAndNames.emailRepeat.name)) {
                  trigger(inputLabelsAndNames.emailRepeat.name)
                }
              }
            }}
          />

          <EmailInput
            label={inputLabelsAndNames.emailRepeat.label}
            name={inputLabelsAndNames.emailRepeat.name}
            isRequired={true}
            registerOptions={{
              validate: (value: string) => {
                return value === getValues(inputLabelsAndNames.email.name) || 'メールアドレスが一致しません。'
              }
            }}
          />
        </FormSection>

        <FormSection>
          <FormSectionHeader label='3.その他の項目' isRequired={false} />

          <TextInput
            label={inputLabelsAndNames.organization.label}
            name={inputLabelsAndNames.organization.name}
          />

          <PostalCodeInput
            label={inputLabelsAndNames.postalCode.label}
            name={inputLabelsAndNames.postalCode.name}
          />

          <TextInput
            label={inputLabelsAndNames.address.label}
            name={inputLabelsAndNames.address.name}
          />

          <Checkbox
            label={inputLabelsAndNames.isCallable.label}
            name={inputLabelsAndNames.isCallable.name}
          />

          {watchIsCallable &&
            <TelephoneInput
            label={inputLabelsAndNames.tel.label}
            name={inputLabelsAndNames.tel.name}
            registerOptions={{
              validate: (value: string) => {
                if (!watchIsCallable) return true

                return value !== '' || '電話連絡をご希望の場合は入力してください。'
              }
            }}
            />
          }
        </FormSection>

        <fieldset className="flex justify-center">
          <input
            type='submit'
            value='入力内容を確認する'
            className='
              flex justify-center
              py-4
              w-full
              lg:w-full
              lg:px-12
              bg-black
              text-white text-bold
              rounded-md
              active:bg-gray-500
            '
          />
        </fieldset>
      </form>
    </div>
  )
}
