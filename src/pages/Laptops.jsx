import { useEffect, useState } from 'react'
import { supabase } from '../supabase.js'
import { ProductCardWide } from '../components/ProductCardWide.jsx'
import './Smartphones.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Laptops() {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    fetchLaptops();
  }, []);
  async function fetchLaptops() {
    const { data } = await supabase.from("products").select("*").eq("category", "Laptops");
    setLaptops(data);
  }

  return (
    <>
      <Header />
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
      </div>
      <Footer />
    </>
  )
}