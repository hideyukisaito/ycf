import './App.css'
import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Footer from './components/Footer'
import RequiredLabel from './components/RequiredLabel'
import FormSectionHeader from './components/FormSectionHeader'
import Select from './components/Select'
import TextInput from './components/TextInput'
import TextArea from './components/TextArea'

function App() {
  return (
    <div className="App container flex flex-col">
      <Header />
      <main className="flex flex-col gap-8 px-8 py-4">
        <Breadcrumbs />
        <header className="flex flex-col justify-center items-center">
          <h1 className="text-md font-bold my-1">お問い合わせフォーム</h1>
          <p className="my-2 text-xs"><a href="#" className="text-blue-500 underline">よくあるお問い合わせ</a>もご覧ください。</p>
        </header>

        <section className="flex flex-col gap-6">
          <FormSectionHeader
            label='1.お問い合わせ内容'
            isRequired={true}
          />
          <Select
            label="対象の製品・サービス"
            options={[
              'なし',
              'サービスA',
              'サービスB',
              'サービスC',
              'その他',
            ]}
          />
          <TextInput label='件名' />
          <TextArea label='お問い合わせの詳細' rows={5} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
