import { useState,useEffect } from "react"
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'
export function Footer() {
    const navigate = useNavigate()
    const [user,setUser] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null))
      }, [])

    async function logOut(){
        supabase.auth.signOut().then(() => navigate('/'))
    }
    return (
        <footer className="footerOfWebsite">
            <hr className='seperator'></hr>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <div style={{ width: '50%', marginBottom: '1%' }}>
                    <h3 className="mainFooterHeading">Axis Tech</h3>
                    <p>This website helps you in buying Tech products in a simple manner.</p>
                </div>
                <div style={{ Width: '50%', marginBottom: '1%' }}>
                    <h3 className="mainFooterHeading">Contact Us</h3>
                    <li>SantoshRaut@gmail.com</li>
                </div>
            </div>
            <div style={{ margin:'0 auto', alignContent:'center',alignItems:'center',alignSelf:"center"}}>
            <h4>Account : {user?.email} <button className="logout-button" onClick={logOut}>Log Out</button></h4>
            </div>
            <h4 style={{ marginBottom: '1%' }}>All Rights Reserved © <color style={{ color: '#7C3AED' }}>Axis-Tech</color> Inc. @2026</h4>
        </footer>
    )
}