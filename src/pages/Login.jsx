import { useState } from "react"
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { supabase } from '../supabase.js'
import './Login.css'

export function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading,setLoading] = useState(false)

    async function authenticateUser() {
        setLoading(true)
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            alert(error.message)
            setLoading(false)
        } else {
            navigate('/Home')
        }
    }
    return (
        <>
            <div className='login-container'>
                <div className="login-card">
                    <h1 style={{ fontWeight: '700', fontSize: '45px' }}>Log in</h1>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    <button onClick={authenticateUser} className='btn' disabled={loading}>{loading ? 'Authenticating User…' : 'Log in'}</button>
                    <p>No account? <Link to="/Signup">Sign up</Link></p>
                </div>
            </div >
        </>
    )
}