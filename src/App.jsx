import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Colection from './pages/Colection'
import Navbar from './components/Navbar'
function App() {
  
  return (
    <div >
     
     <BrowserRouter>
     <Navbar/>  
     <Routes>
       
      <Route path='/' element={<Home/>} />
      <Route path='/colection' element={<Colection/>} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App