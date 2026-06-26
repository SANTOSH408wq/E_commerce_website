import { SearchBar } from './SearchBar'
import { NavBar } from './NavBar'
import { Link } from 'react-router-dom'
export function Header() {

    return (
        <>
            <header>
                <img className='logo' src="/Axis-Tech-Logo.jpeg"></img>
                <SearchBar />
                <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
                    <Link to='/AddProduct'><button className='add-product-button'> Add </button></Link>
                    <Link to='/Cart'><button className='cart-button'> Cart </button></Link>
                </div>
            </header>
            <NavBar />
        </>
    )
}