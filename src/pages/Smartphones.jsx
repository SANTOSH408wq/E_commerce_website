import { useEffect, useState } from 'react'
import { supabase } from '../supabase.js'
import { ProductCard } from '../components/ProductCard.jsx'
import './Smartphones.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function Smartphones() {
  const [smartphones, setSmartphones] = useState([]);
  useEffect(() => {
    fetchSmartphones();
  }, []);
  async function fetchSmartphones() {
    const { data } = await supabase.from("products").select("*").eq("category", "Smartphone");
    setSmartphones(data);
  }
  return (
    <>
      <Header />
      <div className="products-container">
        {smartphones.map((phone) => (
          <div key={phone.id} style={{ padding: '1%', maxWidth: '23%' }}>
            <ProductCard
              id={phone.id}
              title={phone.title}
              price={phone.price}
              category={phone.category}
              imageUrl={phone.imageurl}
              onProductChange={fetchSmartphones}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}