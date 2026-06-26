import "./AddProduct.css";
import { useState } from 'react';
import { supabase } from '../supabase.js'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function AddProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [category, setCategory] = useState("");
    async function addProductData(){
        await supabase.from("products").insert({ title: title, price: price, imageurl: imageURL, category: category})
        alert(`Product Added to ${category}!`)
        setTitle("");
        setPrice("");
        setImageURL("");
        setCategory("");
    }
    return (
        <>
            <Header />
            <div className="add-product-wrapper">
            <div className='add-product-container'>
                <div className="input-group">
                    <label>Title</label>
                    <input type="text" onChange={(e) => (setTitle(e.target.value))} placeholder="e.g. Oppo Find X9 Ultra"></input>
                </div>
                <div className="input-group">
                    <label>Price</label>
                    <input type="text" onChange={(e) => (setPrice(e.target.value))} placeholder="e.g. 1,09,999"></input>
                </div>
                <div className="input-group">
                    <label>Image URL</label>
                    <input type="text" onChange={(e) => (setImageURL(e.target.value))} placeholder="e.g. https://..."></input>
                </div>
                <div className="input-group">
                    <label>Category</label>
                    <input type="text" onChange={(e) => (setCategory(e.target.value))} placeholder="Smartphone/Laptops/Tablets/Earbuds"></input>
                </div>
            
                <div className="action-button">
                    <button className="submit-btn" onClick={()=>addProductData()}>Submit</button>
                </div>
            </div>
            </div>
            <Footer />
        </>
    )
}