import classNames from 'classnames'
import { useForm, useFormContext, useWatch } from 'react-hook-form'
import Checkbox from '../../components/Checkbox'
import EmailInput from '../../components/EmailInput'
import FormSectionHeader from '../../components/FormSectionHeader'
import PostalCodeInput from '../../components/PostalCodeInput'
import Select from '../../components/Select'
import TelephoneInput from '../../components/TelephoneInput'
import TextArea from '../../components/TextArea'
import TextInput from '../../components/TextInput'
import { inputLabelsAndNames } from '../../constants/inputLabelsAndNames'
import './ContactForm.css'

type Props = {
  onSubmit: (data: any) => void
  onComplete: (data: any) => void
  onError: (error: any) => void
}

export const ContactForm: React.FC<Props> = ({ onSubmit }) => {
  const { handleSubmit } = useFormContext()
  const watchIsCallable = useWatch({ name: inputLabelsAndNames.isCallable.name })

  return (
    <div>
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
        <fieldset className='flex flex-col gap-4'>
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
    </div>
  )
}
