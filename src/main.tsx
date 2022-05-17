import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import App from './App'
import Contact from './pages/Contact'
import './index.css'
import Home from './pages/Home'
import ContactFormCompletion from './containers/ContactFormCompletion'
import ContactFormConfirmation from './containers/ContactFormConfirmation'

// @ts-ignore
import('./mocks/browser').then(({ worker }) => worker.start({ onUnhandledRequest: 'bypass' }))

const Wrapper: React.FC<{ children: any }> = ({ children }) => {
  const location = useLocation()

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])

  return children
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='contact' element={<Contact />}>
              <Route path='confirm' element={<ContactFormConfirmation />} />
              <Route path='complete' element={<ContactFormCompletion />} />
            </Route>
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>
)
