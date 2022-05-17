import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className='App flex flex-col relative overflow-x-hidden'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
