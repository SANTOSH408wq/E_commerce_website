import { Link } from 'react-router-dom'
import './Start.css'
export function Start() {
    return (
        <div className="start-container">
            <div className="start-card">
                <h2 style={{ fontWeight: '700', fontSize: '90px' }}>Welcome to our store.</h2><h2 style={{ color: '#7C3AED', fontWeight: '700', fontSize: '90px' }}>Axis Tech</h2>
                <div className="btn-row">
                    <button className='btn'><Link to="/Signup" style={{ textDecoration: "none", color: "white" }}>Get started</Link></button>
                    <button className='btn'><Link to="/Login" style={{ textDecoration: "none", color: "white" }}>Log in</Link></button>
                </div>
            </div>
        </div>
    )
}