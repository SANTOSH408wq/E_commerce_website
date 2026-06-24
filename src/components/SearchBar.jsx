import './SearchBar.css'
export function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for products..." />
            <button className="search-button">Search</button>
        </div>
    )
}