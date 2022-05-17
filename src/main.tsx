import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Contact from './pages/Contact'
import './index.css'
import Home from './pages/Home'
import ContactFormCompletion from './containers/ContactFormCompletion'
import ContactFormConfirmation from './containers/ContactFormConfirmation'

// @ts-ignore
import('./mocks/browser').then(({ worker }) => worker.start())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />}>
            <Route path='confirm' element={<ContactFormConfirmation />} />
            <Route path='complete' element={<ContactFormCompletion />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
