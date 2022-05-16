import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Checkbox from '../../components/Checkbox'
import EmailInput from '../../components/EmailInput'
import FormSectionHeader from '../../components/FormSectionHeader'
import PostalCodeInput from '../../components/PostalCodeInput'
import Select from '../../components/Select'
import InputErrorAlert from '../../components/InputErrorAlert'
import TelephoneInput from '../../components/TelephoneInput'
import TextArea from '../../components/TextArea'
import TextInput from '../../components/TextInput'
import ContactFormConfirmation from '../ContactFormConfirmation'
import { inputLabelsAndNames } from '../../constants/inputLabelsAndNames'
import './ContactForm.css'

type Props = {
  onSubmit: (data: any) => void
}

const ContactForm: React.FC<Props> = ({ onSubmit }) => {
  const [isShowConfirmation, setIsShowConfirmation] = useState(false)
  const [formData, setFormData] = useState<{ [x: string]: any }>({})
  
  const methods = useForm()
  const watchIsCallable = methods.watch('is-callable', false)
  const hasError = Object.keys(methods.formState.errors).length > 0

  const handleSubmit = (data: any) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

    setIsShowConfirmation(true)
    setFormData(data)
    console.log('submit', data)
  }

  return (
    <FormProvider {...methods}>
      <div className='flex md:hidden sticky top-0 z-50'>
        <InputErrorAlert isVisible={hasError} />
      </div>

      <main className='
        flex flex-col items-center self-center gap-8
        lg:w-[500px]
        relative
        px-8 py-4 lg:px-0
      '>
        <header className='flex flex-col justify-center items-center'>
          <h1 className='text-md lg:text-xl font-bold my-1'>お問い合わせフォーム</h1>
          <p className='my-2 text-xs lg:text-[14px]'>
            <a href='#' className='text-blue-500 underline'>よくあるお問い合わせ</a>もご覧ください。
          </p>
        </header>

        <div className={classNames(
          'hidden',
          'md:flex',
          'w-full',
        )}>
          <InputErrorAlert isVisible={hasError} />
        </div>
        
        <form
          className={classNames(
            'flex',
            'flex-col',
            'gap-14',
            'relative',
            'lg:w-full',
            isShowConfirmation ? 'fade-out' : 'opacity-100'
          )}
          autoComplete='on'
          onSubmit={methods.handleSubmit(handleSubmit)}
        >
          <fieldset className='flex flex-col gap-4'>
            <FormSectionHeader label='1.お問い合わせ内容' isRequired={true} />
            <Select
              label={inputLabelsAndNames.inquiryAbout.label}
              options={[
                'なし',
                'サービスA',
                'サービスB',
                'サービスC',
                'その他',
              ]}
              name={inputLabelsAndNames.inquiryAbout.name}
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
          </fieldset>

          <fieldset className='flex flex-col gap-4'>
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
            />
            <EmailInput
              label={inputLabelsAndNames.emailRepeat.label}
              name={inputLabelsAndNames.emailRepeat.name}
              isRequired={true}
            />
          </fieldset>

          <fieldset className='flex flex-col gap-4'>
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
              />
            }
          </fieldset>

          <fieldset className="flex justify-center">
            <input
              type='submit'
              value='入力内容を確認する'
              className='
                flex justify-center
                py-4
                w-full
                lg:w-auto
                lg:px-12
                bg-black
                text-white text-bold
                rounded-md
                active:bg-gray-500
              '
            />
          </fieldset>
        </form>
        
        {isShowConfirmation && <ContactFormConfirmation data={formData} isVisible={isShowConfirmation} />}
        {/* <ContactFormConfirmation data={formData} isVisible={isShowConfirmation} /> */}
      </main>
    </FormProvider>
  )
}

export default ContactForm
