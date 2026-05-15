import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ContactsProvider } from './context/ContactsContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ContactsProvider>
        <App />
      </ContactsProvider>
    </BrowserRouter>
  </StrictMode>,
)
