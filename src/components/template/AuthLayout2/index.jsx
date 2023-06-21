import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthLayout2(props) {
    const { children, title, desc, type} = props
  return (
    <>
        <div className='rounded-lg bg-gradient-to-r from-sky-400 via-blue-500 to to-violet-500 p-1 '>
            <div className='w-full max-w-xs border rounded-lg p-14 bg-white'>
                <h1 className='text-center text-4xl font-bold mb-2 text-blue-500'>
                    {title} </h1>
                    <p className='text-center font-medium text-slate-500 mb-6'>{desc}</p>
                    {children}


                {type === "login" ? (
                    <p className='text-sm mt-5 text-center'>
                        Gapunya akun? {" "}
                        <Link to="/registerPage" className='text-blue-500 font-bold'> Daftar </Link>
                    </p>
                ) : (
                    <p className='text-sm mt-5 text-center'>
                        udah punya akun? {" "}
                        <Link to="/loginPage" className='text-blue-500 font-bold'> Login lah</Link>
                    </p>
                )}
                

            

                </div>
            </div>
       
    </>
  )
  
}

