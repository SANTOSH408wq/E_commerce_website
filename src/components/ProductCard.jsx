import './ProductCard.css'
import { supabase } from '../supabase'
import { useState } from 'react'
import { UpdateProductPopUp } from './UpdateProductPopUp'
import { useNavigate } from 'react-router-dom'

export function ProductCard({ id, title, price, imageUrl, category, onProductChange }) {
  const navigate = useNavigate();
  const [popUpOpen,setPopUpOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
    
  function updateProduct({ id, title, price, imageUrl, category }) {
    setSelectedProduct({ id, title, price, imageUrl, category });
    setPopUpOpen(true);
  };
  async function deleteProduct() {
    await supabase.from('products').delete().eq("id",id)
    onProductChange();
  }
  async function addToCart() {
    await supabase.from('cart').insert({title:title,price:price,imageurl:imageUrl,category:category})
  }
  return (
    <>
    <div className="product-card" onClick={() => navigate(`/product/${id}`, { state: { product: { id, title, price, imageUrl, category } } })}>
      <div className="card-image-container">
        <img src={imageUrl} alt={title} className="card-image" />
        <span className="card-badge">{category}</span>
        <button className="update-button" onClick={(e)=>{ e.stopPropagation(); updateProduct({ id, title, price, imageUrl, category }) }}>Update</button>
        <button className="delete-button" onClick={(e)=>{ e.stopPropagation(); deleteProduct() }}>Delete</button>
      </div>

      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">₹{price}</p>

        <button className="add-to-cart-btn" onClick={(e)=>{ e.stopPropagation(); addToCart() }}>
          Add to Cart
        </button>
      </div>
    </div>
    {popUpOpen && selectedProduct && (
      <UpdateProductPopUp 
          product={selectedProduct} 
          closePopUp={() => setPopUpOpen(false)} 
          onProductChange={onProductChange}
      />
    )} 
  </> 
  )
}