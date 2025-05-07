import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import App from './App.jsx'
import Shop from "./Pages/Shop.jsx"
import Sales from "./Pages/Sales.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
