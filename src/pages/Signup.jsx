import { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase.js'
export function Signup() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function signUpUser() {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) {
            alert(error.message)
        } else {
            navigate('/')
        }
    }
    return (
        <>
            <div className='signup-container'>
                <div className='signup-card'>
                    <h1 style={{ fontWeight: '700', fontSize: '45px' }}>Sign up</h1>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    <button onClick={signUpUser} className="btn">Sign up</button>
                    <p>have an account? <Link to="/Login">Log in</Link></p>
                </div>
            </div>
        </>
    )
}