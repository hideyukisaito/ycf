import './App.css'
import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className='App flex flex-col relative'>
      <Header />
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
