import React from 'react'

export default function AuthLayout(props) {
    const { children, title, desc} = props
  return (
    <>
    <div className='flex justify-center items-center min-h-screen'>
        <div className='rounded-lg bg-gradient-to-r from-sky-400 via-blue-500 to to-violet-500 p-1 '>
            <div className='w-full max-w-xs border rounded-lg p-14 bg-white'>
                <h1 className='text-center text-4xl font-bold mb-2 text-blue-500'>
                    {title} </h1>
                    <p className='text-center font-medium text-slate-500 mb-6'>{desc}</p>
                    {children}

            </div>
        </div>
    </div>
    </>
  )
  
}
