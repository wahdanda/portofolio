import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  <BrowserRouter basename="/portofolio/">
    <Routes>
      {/* https://wahdanda.github.io/portofolio/*/}
    </Routes>
  </BrowserRouter>
)
