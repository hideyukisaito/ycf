import './App.css'
import {
  Location,
  ReactLocation,
  Router,
} from '@tanstack/react-location'
import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'

const location = new ReactLocation()

const App: React.FC = () => {
  return (
    <div className='App flex flex-col'>
      <Header />
      <Breadcrumbs />
      <Router
        location={location}
        routes={[
          { path: '/', element: <Home /> },
          { path: '/contact', element: <Contact /> }
        ]}
      >
      </Router>
      <Footer />
    </div>
  )
}

export default App
