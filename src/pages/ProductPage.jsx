import './ProductPage.css'
import { useLocation, useParams, useNavigate, data } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { supabase } from '../supabase'
import { useState, useEffect } from 'react'

export function ProductPage() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [product, setProduct] = useState(location.state?.product || null);

    useEffect(() => {
        if (!product) {
            fetchProduct();
        }
    }, [id]);

    async function fetchProduct() {
        const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
        if (data) {
            setProduct({
                id: data.id,
                title: data.title,
                price: data.price,
                imageUrl: data.imageurl,
                category: data.category
            });
        }
    }

    async function addToCart() {
        if (!product) return;
        await supabase.from('cart').insert({
            title: product.title,
            price: product.price,
            imageurl: product.imageUrl,
            category: product.category
        })
        alert("Added to cart!");
    }

    async function buyNow() {
        if (!product) return;
        await supabase.from('cart').insert({
            title: product.title,
            price: product.price,
            imageurl: product.imageUrl,
            category: product.category
        })
        navigate('/Cart');
    }

    if (!product) {
        return (
            <>
                <Header />
                <div className="product-page-loading">Loading...</div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <div className="product-page-layout">
                {/* Column 1: Images */}
                <div className="product-images-col">
                    <div className="main-image-container">
                        <img src={product.imageUrl} alt={product.title} />
                    </div>
                </div>

                {/* Column 2: Product Details */}
                <div className="product-details-col">
                    <span className="product-category-breadcrumb">{product.category} › {product.title}</span>

                    <h1 className="product-title">{product.title}</h1>

                    <hr className="divider" />

                    <div className="product-price-section">
                        <span className="price">₹{product.price}</span>
                    </div>
                </div>

                {/* Column 3: Buy Box */}
                <div className="product-buy-col">
                    <div className="buy-box">
                        <h2 className="buy-box-price">₹{product.price}</h2>
                        <p className="delivery-info">FREE delivery <strong>Tomorrow</strong>.</p>

                        <div className="quantity-selector">
                            <label>Quantity: </label>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>

                        <div className="buy-actions">
                            <button className="amazon-add-to-cart-btn" onClick={addToCart}>
                                Add to Cart
                            </button>
                            <button className="amazon-buy-now-btn" onClick={buyNow}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
