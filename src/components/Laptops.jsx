import { useEffect, useState } from 'react'
import { supabase } from '../supabase.js'
import { ProductCardWide } from './ProductCardWide'
import './Smartphones.css'
export function Laptops() {
  const [laptops,setLaptops] = useState([]);
  useEffect(()=> {
    fetchLaptops();
  }, []);
  async function fetchLaptops() {
    const {data} = await supabase.from("products").select("*").eq("category","Laptops");
    setLaptops(data);
  }

  return (
    <>
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
    </>
  )
}