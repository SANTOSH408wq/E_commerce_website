import './pages/AddProduct.css'
import { useState } from "react"
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { Protected } from './Protected'
import { Start } from './pages/Start'
import { Home } from './pages/Home'
import { Smartphones } from './pages/Smartphones'
import { Laptops } from './pages/Laptops'
import { Tablets } from './pages/Tablets'
import { EarBuds } from './pages/EarBuds'
import { AddProduct } from './pages/AddProduct'
import { Cart } from './pages/Cart'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Home" element={<Protected><Home /></Protected>} />
          <Route path="/Smartphones" element={<Protected><Smartphones /></Protected>} />
          <Route path="/Laptops" element={<Protected><Laptops /></Protected>} />
          <Route path="/Tablets" element={<Protected><Tablets /></Protected>} />
          <Route path="/EarBuds" element={<Protected><EarBuds /></Protected>} />
          <Route path="/AddProduct" element={<Protected><AddProduct /></Protected>} />
          <Route path="/Cart" element={<Protected><Cart /></Protected>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </main>
    </>
  )
}

export default App
