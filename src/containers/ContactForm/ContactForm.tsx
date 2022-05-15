import classNames from "classnames"
import { useEffect, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import Checkbox from "../../components/Checkbox"
import EmailInput from "../../components/EmailInput"
import FormSectionHeader from "../../components/FormSectionHeader"
import PostalCodeInput from "../../components/PostalCodeInput"
import Select from "../../components/Select"
import StickyAlert from "../../components/StickyAlert"
import TelephoneInput from "../../components/TelephoneInput"
import TextArea from "../../components/TextArea"
import TextInput from "../../components/TextInput"
import ContactFormConfirmation from "../ContactFormConfirmation"
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
      <StickyAlert isVisible={hasError} />

      <main className='flex flex-col items-center gap-8 relative px-8 py-4'>
        <header className='flex flex-col justify-center items-center'>
          <h1 className='text-md lg:text-xl font-bold my-1'>お問い合わせフォーム</h1>
          <p className='my-2 text-xs lg:text-[14px]'>
            <a href='#' className='text-blue-500 underline'>よくあるお問い合わせ</a>もご覧ください。
          </p>
        </header>

        <form
          className={classNames(
            'flex',
            'flex-col',
            'gap-12',
            'relative',
            'lg:w-[500px]',
            isShowConfirmation ? 'fade-out' : 'opacity-100'
          )}
          autoComplete='on'
          onSubmit={methods.handleSubmit(handleSubmit)}
        >
          <fieldset className='flex flex-col gap-4'>
            <FormSectionHeader label='1.お問い合わせ内容' isRequired={true} />
            <Select
              label='対象の製品・サービス'
              options={[
                'なし',
                'サービスA',
                'サービスB',
                'サービスC',
                'その他',
              ]}
              name='inquiry-about'
            />
            <TextInput label='件名' name='inquiry-title' isRequired={true} />
            <TextArea label='お問い合わせの詳細' rows={8} name='inquiry-detail' isRequired={true} />
          </fieldset>

          <fieldset className='flex flex-col gap-4'>
            <FormSectionHeader label='2.お名前とメールアドレス' isRequired={true} />
            <div className='flex flex-row justify-between gap-4 lg:gap-8'>
              <TextInput label='姓' name='fanmily-name' autocomplete='family-name' isRequired={true} />
              <TextInput label='名' name='given-name' autocomplete='given-name' isRequired={true} />
            </div>
            <div className='flex flex-row justify-between gap-4 lg:gap-8'>
              <TextInput label='姓 (ふりがな)' name='family-name-kana' isRequired={true} />
              <TextInput label='名 (ふりがな)' name='given-name-kana' isRequired={true} />
            </div>
            <EmailInput label='メールアドレス' name='email' isRequired={true} />
            <EmailInput label='メールアドレス (確認)' name='email-repeat' isRequired={true} />
          </fieldset>

          <fieldset className='flex flex-col gap-4'>
            <FormSectionHeader label='3.その他の項目' isRequired={false} />
            <TextInput label='会社名' name='organization' />
            <PostalCodeInput label='郵便番号' name='postal-code' />
            <TextInput label='住所' name='address' />
            <Checkbox label='電話での返答を希望する' name='is-callable' />
            {watchIsCallable &&
              <TelephoneInput label='電話番号' name='tel' />
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
