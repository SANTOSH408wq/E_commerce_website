import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Start.css'
export function Start() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    async function goToLogin(){
        setLoading(true)
        navigate('/login')
    }
    async function goToSignup(){
        setLoading(true)
        navigate('/signup')
    }
    return (
        <div className="start-container">
            <div className="start-card">
                <h2 style={{ fontWeight: '700', fontSize: '90px' }}>Welcome to our store.</h2><h2 style={{ color: '#7C3AED', fontWeight: '700', fontSize: '90px' }}>Axis Tech</h2>
                <div className="btn-row">
                    <button className='btn'onClick={goToSignup}disabled={loading}>{loading ? 'Loading…' : 'Get started'}</button>
                    <button className='btn' onClick={goToLogin}disabled={loading}>{loading ? 'Loading…' : 'Log in'}</button>
                </div>
            </div>
        </div>
    )
}