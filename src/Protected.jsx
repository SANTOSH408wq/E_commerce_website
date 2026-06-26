import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from './supabase'

export function Protected({ children }) {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
  const check = async () => {
    const { data } = await supabase.auth.getSession()
    setUser(data.session?.user ?? null)
  }
  check()
}, [])

  if (user === undefined) return <p>Loading…</p>
  if (!user) return <Navigate to="/Login" replace />
  return children
}