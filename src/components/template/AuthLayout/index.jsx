import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthLayout(props) {
    const { children, title, desc, type} = props
  return (
    <>
    <div className='flex justify-center items-center min-h-screen'>
        <div className='rounded-lg bg-gradient-to-r from-sky-400 via-blue-500 to to-violet-500 p-1 '>
            <div className='w-full max-w-xs border rounded-lg p-14 bg-white'>
                <h1 className='text-center text-4xl font-bold mb-2 text-blue-500'>
                    {title} </h1>
                    <p className='text-center font-medium text-slate-500 mb-6'>{desc}</p>
                    {children}

                {/* CARA PERTAMA  conditional rendering */}
                {/* <div className='flex-col justify-center items-center w-full'>
                <p className='text-sm mt-5 text-center w-full'>
                    {type === "login" ? "gapunya akun?" : "udah punya akun?"}
                </p>

                {type === "login" && (
                    <Link to="/registerPage" className='text-blue-500 font-bold'> Daftar </Link>
                )}

                {type === "register" && (
                    <Link to="/loginPage" className='text-blue-500 font-bold'> Masuk </Link>
                )} */}

                {/* CARA KEDUA  */}
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
                

                {/* CARA KETIGA */}

                {/* <Navigasi type={type}/> */}

                </div>
            </div>
        </div>
    {/* </div> */}
    </>
  )
  
}

// CARA KETIGA

// const Navigasi = ({type}) => {
//     if(type === "login") {
//         return (
//             <p className="text-sm mt-5 text-center">
//                 gapunya akun?{" "}
//                 <Link to="/registerPage" className='text-blue-500 font-bold'>
//                 Daftar
//             </Link>
//             </p>
//         );
//     } else {
//         return (
//             <p className="text-sm mt-5 text-center">
//                 dah punya akun?{" "}
//                 <Link to="/loginPage" className='text-blue-500 font-bold'>
//                 ya login woy
//             </Link>
//             </p>
//         )
//     }
// }