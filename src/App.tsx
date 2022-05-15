import './App.css'
import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Footer from './components/Footer'
import ContactForm from './containers/ContactForm/ContactForm'

function App() {
  const onSubmit = (data: any) => console.log(data)

  return (
      <div className='App container flex flex-col'>
        <Header />
        <Breadcrumbs />
        <ContactForm onSubmit={onSubmit} />
        <Footer />
      </div>
  )
}

export default App
