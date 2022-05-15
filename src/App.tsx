import './App.css'
import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Footer from './components/Footer'
import FormSectionHeader from './components/FormSectionHeader'
import Select from './components/Select'
import TextInput from './components/TextInput'
import TextArea from './components/TextArea'
import EmailInput from './components/EmailInput'
import Checkbox from './components/Checkbox'
import TelephoneInput from './components/TelephoneInput'
import StickyAlert from './components/StickyAlert'
import { useForm, FormProvider, useFormContext } from "react-hook-form"

function App() {
  const methods = useForm()
  const onSubmit = (data: any) => console.log(data)
  const watchIsCallable = methods.watch('is-callable', false)

  console.log('watchIsCallable', watchIsCallable)

  const hasError = Object.keys(methods.formState.errors).length > 0

  return (
    <div className='App container flex flex-col'>
      <StickyAlert isVisible={hasError} />
      <Header />
      <main className='flex flex-col gap-8 px-8 py-4'>
        <Breadcrumbs />

        <header className='flex flex-col justify-center items-center'>
          <h1 className='text-md font-bold my-1'>お問い合わせフォーム</h1>
          <p className='my-2 text-xs'><a href='#' className='text-blue-500 underline'>よくあるお問い合わせ</a>もご覧ください。</p>
        </header>


        <FormProvider {...methods}>
          <form className='flex flex-col gap-12' autoComplete='on' onSubmit={methods.handleSubmit(onSubmit)}>
            <section className='flex flex-col gap-4'>
              <FormSectionHeader
                label='1.お問い合わせ内容'
                isRequired={true}
              />
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
              <TextInput label='件名' name='inquiry-title' required={true} />
              <TextArea label='お問い合わせの詳細' rows={5} name='inquiry-detail' isRequired={true} />
            </section>

            <section className='flex flex-col gap-4'>
              <FormSectionHeader
                label='2.お名前とメールアドレス'
                isRequired={true}
              />
              <div className='flex flex-row justify-between gap-4'>
                <TextInput label='姓' name='family-name' autocomplete='family-name' required={true} />
                <TextInput label='名' name='given-name' autocomplete='given-name' required={true} />
              </div>
              <div className='flex flex-row justify-between gap-4'>
                <TextInput label='姓 (ふりがな)' name='family-name-kana' required={true} />
                <TextInput label='名 (ふりがな)' name='given-name-kana' required={true} />
              </div>
              <EmailInput label='メールアドレス' required={true} />
            </section>

            <section className='flex flex-col gap-4'>
              <FormSectionHeader
                label='3.その他の項目'
                isRequired={false}
              />
              <TextInput label='会社名' name='organization' />
              <TextInput label='郵便番号' name='postal-code' />
              <TextInput label='住所' name='address' />
              <Checkbox label='電話での返答を希望する' name='is-callable' />
              {watchIsCallable &&
                <TelephoneInput label='電話番号' name='tel' />
              }
            </section>

            <section>
              <input
                type='submit'
                value='入力内容を確認する'
                className='
                  flex justify-center
                  py-4
                  w-full
                  bg-black
                  text-white text-bold
                  rounded-md
                  active:bg-gray-500
                '
              />
            </section>
          </form>
        </FormProvider>
      </main>
      <Footer />
    </div>
  )
}

export default App
