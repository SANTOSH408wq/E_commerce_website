import './App.css'
import './components/AddProduct.css'
import { useState } from "react"
import { Link } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Route, Routes} from 'react-router-dom'
import { SearchBar } from './components/SearchBar'

import { Home } from './components/Home'
import { Smartphones } from './components/Smartphones'
import { Laptops } from './components/Laptops'
import { Tablets } from './components/Tablets'
import { EarBuds } from './components/EarBuds'
import { AddProduct } from './components/AddProduct'
import { Cart } from './components/Cart'
function App() {
  return (
    <>
      <header>
        <img className='logo' src="/Axis-Tech-Logo.jpeg"></img>
        <SearchBar />
        <div style={{display:'flex', flexDirection:'row', gap:'8px'}}>
          <Link to='/AddProduct'><button className='add-product-button'> Add </button></Link>
          <Link to='/Cart'><button className='cart-button'> Cart </button></Link>
        </div>
      </header>
      <NavBar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Smartphones" element={<Smartphones />} />
        <Route path="/Laptops" element={<Laptops />} />
        <Route path="/Tablets" element={<Tablets />} />
        <Route path="/EarBuds" element={<EarBuds />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      </main>
      <footer className="footerOfWebsite">
        <hr className='seperator'></hr>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <div style={{ width: '50%', marginBottom: '1%' }}>
            <h3 className="mainFooterHeading">Axis Tech</h3>
            <p>This website helps you in buying Tech products in a simple manner.</p>
          </div>
          <div style={{ Width: '50%', marginBottom: '1%' }}>
            <h3 className="mainFooterHeading">Contact Us</h3>
            <li>SantoshRaut@gmail.com</li>
          </div>
        </div>
        <h4 style={{ marginBottom: '1%' }}>All Rights Reserved © <color style={{ color: '#7C3AED' }}>Axis-Tech</color> Inc. @2026</h4>
      </footer>
    </>
  )
}

export default App
