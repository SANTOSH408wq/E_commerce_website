import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import { ProductCard } from '../components/ProductCard'
import './Smartphones.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function Tablets() {
  const [tablets,setTablets] = useState([])
  useEffect(()=> {
    fetchTablets();
  }, []);
  async function fetchTablets() {
      const {data} = await supabase.from("products").select("*").eq("category","Tablets");
      setTablets(data);
  }
  return (
    <>
      <Header />
      <div className="products-container">
      {tablets.map((tablet) => (
          <div key={tablet.id} style={{ padding: '1%', maxWidth: '23%' }}>
            <ProductCard
              id={tablet.id}
              title={tablet.title}
              price={tablet.price}
              category={tablet.category}
              imageUrl={tablet.imageurl} 
              onProductChange={fetchTablets}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}