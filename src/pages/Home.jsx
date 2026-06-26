import './Home.css';
import './Smartphones.css'
import { supabase } from '../supabase';
import { useState, useEffect } from 'react'
import { ProductCard } from '../components/ProductCard';
import { ProductCardWide } from '../components/ProductCardWide';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function Home() {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    fetchLaptops();
    fetchSmartphones();
  }, []);
  async function fetchLaptops() {
    const { data } = await supabase.from("products").select("*").eq("category", "Laptops");
    setLaptops(data);
  }
  const [otherProducts, setOtherProducts] = useState([]);
  async function fetchSmartphones() {
    const { data } = await supabase.from("products").select("*").neq("category", "Laptops");
    setOtherProducts(data);
  }

  return (
    <>
      <Header />
      <div className="greeting">
        <hr style={{ border: '1px solid #334155' }}></hr>
        <p>Welcome to ourn Axis Tech-commerce website!</p>
      </div>
      <div className="products-container">
        {laptops.map((laptop) => (
          <div key={laptop.id} style={{ padding: '1%', maxWidth: '48%' }}>
            <ProductCardWide
              id={laptop.id}
              title={laptop.title}
              price={laptop.price}
              category={laptop.category}
              imageUrl={laptop.imageurl}
              onProductChange={fetchLaptops}
            />
          </div>
        ))}
        {otherProducts.map((product) => (
          <div key={product.id} style={{ padding: '1%', maxWidth: '23%' }}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              imageUrl={product.imageurl}
              onProductChange={fetchSmartphones}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}