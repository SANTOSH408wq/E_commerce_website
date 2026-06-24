import { supabase } from '../supabase'
import { useState, useEffect } from 'react'

export function UpdateProductPopUp({ product, closePopUp, onProductChange }) {
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);
    const [imageurl, setimageURL] = useState(product.imageUrl);

    async function saveChanges() {
        await supabase.from("products").update({
            title: title,
            price: price,
            category: category,
            imageurl: imageurl
        }).eq('id', product.id);
        closePopUp();
        if (onProductChange) {
            onProductChange(); 
        }
        alert(`${title} details Updated!`)   
    }

    return (
        <div className="popUp-overlay">
                <div className="popUp-content">
                <h2>Update Product</h2>
                <div>
                    <div className="input-group">
                        <label>Title</label>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                            autoComplete="new-password" 
                            spellCheck="false"
                        />
                    </div>
                    <div className="input-group">
                        <label>Price</label>
                        <input 
                            type="text" 
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)}
                            autoComplete="new-password" 
                            spellCheck="false"
                        />
                    </div>
                    <div className="input-group">
                        <label>Category</label>
                        <input 
                            type="text" 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)}
                            autoComplete="new-password" 
                            spellCheck="false"
                        />
                    </div>
                    <div className="input-group">
                        <label>Image URL</label>
                        <input 
                            type="text" 
                            value={imageurl} 
                            onChange={(e) => setimageURL(e.target.value)}
                            autoComplete="new-password" 
                            spellCheck="false"
                        />
                    </div>
                    
                    <div className="popUp-buttons">
                        <button type="button" className="cancel-btn" onClick={closePopUp}>
                            Cancel
                        </button>
                        <button type="button" className="submit-btn" onClick={saveChanges}>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}