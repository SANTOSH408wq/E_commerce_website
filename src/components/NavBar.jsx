import { Link } from 'react-router-dom'
import './NavBar.css'
export function NavBar() {
  return (
    <nav className="categories">
      <Link to="/Home"> <li> Home</li></Link>
      <Link to="/Smartphones"> <li> Smartphones</li></Link>
      <Link to="/Laptops"> <li> Laptops</li></Link>
      <Link to="/Tablets"> <li> Tablets</li></Link>
      <Link to="/EarBuds"> <li> EarBuds</li></Link>
    </nav>
  )
}