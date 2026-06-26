import { useEffect, useState } from 'react'
import { supabase } from '../supabase.js'
import { ProductCard } from '../components/ProductCard.jsx'
import './Smartphones.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function EarBuds() {
  const [earbuds, setEarbuds] = useState([]);
  useEffect(() => {
    fetchEarbuds();
  }, []);
  async function fetchEarbuds() {
    const { data } = await supabase.from("products").select("*").eq("category", "Earbuds");
    setEarbuds(data);
  }

  return (
    <>
      <Header />
      <div className="products-container">
        {earbuds.map((earbud) => (
          <div key={earbud.id} style={{ padding: '1%', maxWidth: '23%' }}>
            <ProductCard
              id={earbud.id}
              title={earbud.title}
              price={earbud.price}
              category={earbud.category}
              imageUrl={earbud.imageurl}
              onProductChange={fetchEarbuds}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
