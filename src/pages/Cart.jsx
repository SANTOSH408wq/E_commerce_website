import { useEffect, useState } from 'react';
import { supabase } from '../supabase'
import '../components/UpdateProduct.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function Cart() {
    const [productData, setProductData] = useState([]);
    async function fetchProductData() {
        const { data } = await supabase.from("cart").select("*");
        setProductData(data);
    }
    async function removeClicked(product) {
        await supabase.from('cart').delete().eq("id", product.id)
        fetchProductData();
    }
    useEffect(() => {
        fetchProductData();
    }, []);
    return (
        <>
            <Header />
            <table className='product-list'>
                <thead>
                    <tr className='product-list-header'>
                        <th style={{ maxWidth: '10%' }}>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product) => (
                        <tr key={product.id} className='product-data'>
                            <td className='image-section'><img className='image-logo' src={product.imageurl} alt='product.title'></img></td>
                            <td>{product.title}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="remove-button" onClick={() => removeClicked(product)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
        </>
    )
}