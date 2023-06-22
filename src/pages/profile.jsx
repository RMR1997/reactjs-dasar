import React from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Profile() {
    const username = useLogin()
  return (
    
    <div className='text-5xl flex text-center items-center justify-center h-screen font-bold'>
        <div><a href="/products">Hi : {username}</a> </div>
    </div>
  )
}
